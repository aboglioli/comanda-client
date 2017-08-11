import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { LocalDataSource } from 'ng2-smart-table';

import { ProductService } from '../../../../shared/services';
import { SearchProductEditorComponent } from '../search-product-editor/search-product-editor.component';
import { SearchProductRenderComponent } from '../search-product-render/search-product-render.component';
import { Subproduct, Product } from '../../../../models';
import { NotificationService } from '../../../../shared/services';
import { config } from '../../../../config';
import { checkProperties } from '../../../../utils';

@Component({
  selector: 'app-subproducts',
  templateUrl: './subproducts.component.html',
  styleUrls: ['./subproducts.component.scss']
})
export class SubproductsComponent implements OnInit, OnChanges {
  @Input() product: Product;
  @Output() changeSubproducts = new EventEmitter<Subproduct[]>();

  data: LocalDataSource;
  settings = {
    columns: {
      product: {
        title: 'Insumo',
        type: 'custom',
        renderComponent: SearchProductRenderComponent,
        editor: {
          type: 'custom',
          component: SearchProductEditorComponent,
        },
        filterFunction(cell?: Product, search?: string): boolean {
          return cell.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1;
        }
      },
      quantity: {
        title: 'Cantidad',
      },
      unit: {
        title: 'Unidad',
        editor: {
          type: 'list',
          config: {
            selectText: 'Seleccionar',
            list: [],
          }
        }
      },
    },
  };

  private subscription: Subscription;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    // Settings
    this.settings = _.assign(this.settings, config.ng2SmartTableDefaultSettings);

    this.settings.columns.unit.editor.config.list = [...config.units.mass, ...config.units.volume, config.units.unit]
      .map(unit => {
        return {title: unit.unit, value: unit.unit};
      });

    // Data
    const subproducts = <Subproduct[]>this.product.subproducts || [];
    this.data = new LocalDataSource(subproducts.map(subproduct => this.desmaterializeSubproduct(subproduct)));

    this.subscription = this.data.onChanged().subscribe(data => {
      this.changeSubproducts.emit(data.elements.map(element => this.materializeSubproduct(element)));
    });
  }

  ngOnChanges() {
    // if (this.subscription) {
    //   this.subscription.unsubscribe();
    // }

    // const subproducts = <Subproduct[]>this.product.subproducts || [];
    // this.data = new LocalDataSource(subproducts.map(subproduct => this.desmaterializeSubproduct(subproduct)));

    // this.subscription = this.data.onChanged().subscribe(data => {
    //   this.changeSubproducts.emit(data.elements.map(element => this.materializeSubproduct(element)));
    // });
  }

  onCreate(event) {
    // Validate
    const valid = this.validate(event.newData);

    if(!valid) {
      event.confirm.reject();
      return;
    }

    event.confirm.resolve(event.newData);
  }

  onEdit(event) {
    // Validate
    const valid = this.validate(event.newData);

    if(!valid) {
      event.confirm.reject();
      return;
    }

    event.confirm.resolve(event.newData);
  }

  onDelete(event) {
    event.confirm.resolve();
  }

  private validate(data): boolean {
    // Check for required properties
    const propsNotPresent = checkProperties(data, [{
      name: 'product',
      text: 'insumo'
    }, {
      name: 'quantity',
      text: 'cantidad'
    }, {
      name: 'unit',
      text: 'unidad'
    }]);

    if(propsNotPresent && propsNotPresent.length > 0) {
      this.notificationService.notify('Se requere ' + propsNotPresent.join(', '), 'danger');
      return false;
    }

    // Product cannot reference itself as subproduct
    if(data.product._id === this.product._id) {
      this.notificationService.notify('El producto no puede tenerse a sí mismo como subproducto', 'danger');
      return false;
    }

    return true;
  }

  private desmaterializeSubproduct(subproduct: Subproduct): any {
    return {
      product: subproduct.product,
      quantity: subproduct.quantity.value.toString(),
      unit: subproduct.quantity.unit.toString()
    };
  }

  private materializeSubproduct(data): Subproduct {
    return {
      quantity: {
        value: data.quantity,
        unit: data.unit
      },
      product: data.product,
    };
  }

}

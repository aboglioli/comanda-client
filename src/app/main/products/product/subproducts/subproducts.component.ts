import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import * as _ from 'lodash';

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
export class SubproductsComponent implements OnInit {
  @Input() product: Product;
  @Output() changeSubproducts = new EventEmitter<Subproduct[]>();

  subproducts: Subproduct[];
  source: LocalDataSource;
  data = [];
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

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    // Settings
    this.settings = _.assign(this.settings, config.ng2SmartTableDefaultSettings);

    this.settings.columns.unit.editor.config.list = [...config.units.mass, ...config.units.volume, config.units.unit]
      .map(unit => {
        return {title: unit.unit, value: unit.unit};
      });

    // Data
    this.subproducts = <Subproduct[]>this.product.subproducts;

    if(this.subproducts && this.subproducts.length > 0) {
      this.data = this.subproducts.map(subproduct => this.desmaterializeSubproduct(subproduct));
    }

    this.subproducts = this.subproducts || [];

  }

  onCreate(event) {
    // Validate
    const valid = this.validate(event.newData);

    if(!valid) {
      event.confirm.reject();
      return;
    }

    const materializedSubproduct = this.materializeSubproduct(event.newData);
    const duplicatedSubproducts = this.checkDuplicatedSubproducts([materializedSubproduct, ...this.subproducts]);

    if(duplicatedSubproducts) {
      event.confirm.reject();
      return;
    }

    this.subproducts.push(materializedSubproduct);
    this.changeSubproducts.emit(this.subproducts);
    event.confirm.resolve(event.newData);
  }

  onEdit(event) {
    // Validate
    const valid = this.validate(event.newData);

    if(!valid) {
      event.confirm.reject();
      return;
    }

    const materializedSubproduct = this.materializeSubproduct(event.newData);

    let subproducts = _.cloneDeep(this.subproducts);

    console.log(event);

    const sameSubproducts = subproducts.filter(s => s.product._id === materializedSubproduct.product._id).length;

    if(sameSubproducts > 1) {
      this.notificationService.notify('Este insumo ya existe en el producto', 'danger');
      event.confirm.reject();
      return;
    }

    subproducts = subproducts.map((subproduct, i) => {
      if(subproduct.product._id === materializedSubproduct.product._id) {
        return materializedSubproduct;
      }

      return subproduct;
    });

    this.subproducts = subproducts;

    this.changeSubproducts.emit(this.subproducts);

    event.confirm.resolve(event.newData);
  }

  onDelete(event) {
    const materializedSubproduct = this.materializeSubproduct(event.data);

    this.subproducts = this.subproducts.filter((subproduct) => {
      return subproduct.product._id !== materializedSubproduct.product._id;
    });

    this.changeSubproducts.emit(this.subproducts);

    event.confirm.resolve();
  }

  onSearch(text: string) {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'quantity',
        search: text
      },
       {
        field: 'unit',
        search: text
      },
    ], false);
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

    // Product can only have once the same subproduct

    return true;
  }

  private checkDuplicatedSubproducts(subproducts: Subproduct[]): boolean {
    const duplicatedSubproducts = subproducts.some(subproduct => {
      return subproducts.filter(s => s.product._id === subproduct.product._id).length !== 1;
    });

    if(duplicatedSubproducts) {
      this.notificationService.notify('El producto contiene el mismo insumo más de una vez', 'danger');
      return true;
    }

    return false;
  }

  private desmaterializeSubproduct(subproduct: Subproduct): any {
    return {
      product: subproduct.product,
      quantity: subproduct.quantity.value,
      unit: subproduct.quantity.unit
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

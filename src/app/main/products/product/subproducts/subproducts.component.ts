import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import * as _ from 'lodash';

import { ProductService } from '../../../../shared/services';
import { SearchProductEditorComponent } from '../search-product-editor/search-product-editor.component';
import { SearchProductRenderComponent } from '../search-product-render/search-product-render.component';
import { Subproduct, Product } from '../../../../models';
import { config } from '../../../../config';

@Component({
  selector: 'app-subproducts',
  templateUrl: './subproducts.component.html',
  styleUrls: ['./subproducts.component.scss']
})
export class SubproductsComponent implements OnInit {
  @Input() subproducts: Subproduct[];
  @Output() changeSubproducts = new EventEmitter<Subproduct[]>();

  data = [];
  source: LocalDataSource;
  raws: Product[];

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

  constructor(private productService: ProductService) {
   }

  ngOnInit() {
    // Settings
    this.settings = _.assign(this.settings, config.ng2SmartTableDefaultSettings);

    this.settings.columns.unit.editor.config.list = [...config.units.mass, ...config.units.volume, config.units.unit]
      .map(unit => {
        return {title: unit.unit, value: unit.unit};
      });

    // Data
    if(this.subproducts && this.subproducts.length > 0) {
      this.data = this.subproducts.map(subproduct => this.desmaterializeSubproduct(subproduct));
    }

    this.subproducts = this.subproducts || [];

    this.productService.get({type: 'raw'}).subscribe(raws => {
      this.raws = raws;
      this.data = raws.map(raw => this.desmaterializeRaw(raw));
    });
  }

  onCreate(event) {
    this.subproducts.push(this.materializeSubproduct(event.newData));
    this.changeSubproducts.emit(this.subproducts);

    event.confirm.resolve(event.newData);
  }

  onEdit(event) {
    const materializedSubproduct = this.materializeSubproduct(event.newData);

    this.subproducts = this.subproducts.map((subproduct, i) => {
      if(subproduct.product._id === materializedSubproduct.product._id) {
        return materializedSubproduct;
      }

      return subproduct;
    });

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

  private desmaterializeRaw(product: Product): any {
    return {
      product: product,
      quantity: product.price.quantity.value,
      unit: product.price.quantity.unit
    };
  }

}

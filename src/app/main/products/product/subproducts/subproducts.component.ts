import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

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

  constructor() { }

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

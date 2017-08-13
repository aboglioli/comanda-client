import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { NotificationsService } from 'angular2-notifications';

import { ProductService } from '../../../../shared/services';
import { Product } from '../../../../models';
import { config } from '../../../../config';

@Component({
  selector: 'app-raw',
  templateUrl: './raw.component.html',
  styleUrls: ['./raw.component.scss']
})
export class RawComponent implements OnInit {
raws: Product[];

  data: any[];
  settings = {
    columns: {
      name: {
        title: 'Nombre'
      },
      price: {
        title: 'Precio'
      },
      quantity: {
        title: 'Cantidad'
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
      }
    }
  };

  constructor(private notification: NotificationsService,
              private productService: ProductService) { }

  ngOnInit() {
    // Settings
    this.settings = _.assign(this.settings, config.ng2SmartTableDefaultSettings);

    this.settings.columns.unit.editor.config.list = [...config.units.mass, ...config.units.volume, config.units.unit]
      .map(unit => {
        return {title: unit.unit, value: unit.unit};
      });

    // Data
    this.productService.get({type: 'raw'}).subscribe(raws => {
      this.raws = raws;
      this.data = raws.map(raw => this.desmaterializeRaw(raw));
    });
  }

  onCreate(event) {
    const raw = this.materializeRaw(event.newData);

    this.productService.post(raw).subscribe(raw => {
      event.confirm.resolve(this.desmaterializeRaw(raw));
    });
    console.log(raw);
  }

  onEdit(event) {
    const rawId = event.newData._id;
    const raw = this.materializeRaw(event.newData);

    this.productService.put(rawId, raw).subscribe(raw => {
      event.confirm.resolve(this.desmaterializeRaw(raw));
    });
  }

  onDelete(event) {
    const rawId = event.data._id;

    this.productService.delete(rawId).subscribe(() => {
      event.confirm.resolve();
    });
  }

  private desmaterializeRaw(product: Product): any {
    return {
      _id: product._id,
      name: product.name,
      price: product.price.value,
      quantity: product.price.quantity.value,
      unit: product.price.quantity.unit
    };
  }

  private materializeRaw(data): Product {
    return {
      name: data.name,
      type: 'raw',
      price: {
        value: data.price,
        quantity: {
          value: data.quantity,
          unit: data.unit
        }
      }
    };
  }
}

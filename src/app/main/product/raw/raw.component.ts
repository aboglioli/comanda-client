import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { ProductService, NotificationService } from '../../../shared/services';
import { Product } from '../../../models';
import { config } from '../../../config';

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
      description: {
        title: 'Descripción',
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
            list: [
              {
                title: 'kg',
                value: 'kg',
              },
              {
                title: 'l',
                value: 'l',
              }
            ],
          }
        }
      }
    }
  };

  constructor(private productService: ProductService,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.productService.get().subscribe(raws => {
      this.raws = raws;
      this.data = raws.map(raw => this.desmaterializeRaw(raw));
    });
    this.settings = _.assign(this.settings, config.ng2SmartTableDefaultSettings);
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
      description: product.description,
      price: product.price.value,
      quantity: product.price.quantity.value,
      unit: product.price.quantity.unit
    };
  }

  private materializeRaw(data): Product {
    return {
      name: data.name,
      description: data.description,
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

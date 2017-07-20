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
  settings = {
    columns: {
      name: {
        title: 'Nombre'
      },
      description: {
        title: 'Descripción',
      },
      pricevalue: {
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
    this.productService.get()
      .subscribe(raws => {
        this.raws = raws;
      });
    this.settings = _.assign(this.settings, config.ng2SmartTableDefaultSettings);
  }

  onCreate(event) {
    const raw = this.materializeRaw(event.newData);

    this.productService.post(raw)
      .subscribe(raw => {
        event.confirm.resolve(raw);
      });
    console.log(raw);
  }

  onEdit(event) {
    const rawId = event.newData._id;
    const raw = this.materializeRaw(event.newData);

    this.productService.put(rawId, raw)
      .subscribe(raw => {
        event.confirm.resolve(raw);
      });
  }

  onDelete(event) {
    const rawId = event.data._id;

    this.productService.delete(rawId)
      .subscribe(() => {
        event.confirm.resolve();
      });
  }

  private materializeRaw(data): Product {
    const raw: Product = {
      name: data.name,
      description: data.description,
      type: 'raw',
      price: {
        value: data.pricevalue,
        quantity: {
          value: data.quantity,
          unit: data.unit
        }
      }

    }
    for (const prop in raw) {
      if (!raw[prop]) {
        delete raw[prop];
      }
    }

    delete raw._id;

    return raw;
  }
}


import { Component, OnInit } from '@angular/core';

import { Product } from '../../../models';

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
        filter: {
          type: 'list',
          config: {
            selectText: 'Seleccionar',
            list: [
              {

              }
            ],
          }
        }
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

}


import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { NotificationsService } from 'angular2-notifications';

import { ProductService } from 'app/shared/services';
import { Product } from 'app/models';
import { config } from 'app/config';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.scss']
})
export class PaperComponent implements OnInit {

papers: Product[];

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
    this.productService.get({type: 'paper'}).subscribe(papers => {
      this.papers = papers;
      this.data = papers.map(paper => this.desmaterializePaper(paper));
    });
  }

  onCreate(event) {
    const paper = this.materializePaper(event.newData);

    this.productService.post(paper).subscribe(paper => {
      event.confirm.resolve(this.desmaterializePaper(paper));
    });
    console.log(paper);
  }

  onEdit(event) {
    const paperId = event.newData._id;
    const paper = this.materializePaper(event.newData);

    this.productService.put(paperId, paper).subscribe( paper => {
      event.confirm.resolve(this.desmaterializePaper(paper));
    });
  }

  onDelete(event) {
    const paperId = event.data._id;

    this.productService.delete(paperId).subscribe(() => {
      event.confirm.resolve();
    });
  }

  private desmaterializePaper(product: Product): any {
    return {
      _id: product._id,
      name: product.name,
      price: product.price,
      quantity: product.unit.value,
      unit: product.unit.unit
    };
  }

  private materializePaper(data): Product {
    return {
      name: data.name,
      type: 'paper',
      price: data.price,
      unit: {
        value: data.quantity,
        unit: data.unit
      }
    };
  }

}

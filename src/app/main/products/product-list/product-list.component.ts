import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

import { Product } from '../../../models';
import { ProductService } from '../../../shared/services';
import { config } from '../../../config';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  data = [];
  settings = {
    mode: 'external',
    columns: {
      name: {
        title: 'Nombre'
      },
      price: {
        title: 'Precio'
      },
      type: {
        title: 'Tipo',
      },
      subproducts: {
        title: 'Subproductos',
      },
    }
  };

  constructor(private router: Router,
              private productService: ProductService) { }

  ngOnInit() {
    this.productService.get({type: 'product'}).subscribe((products: Product[]) => {
      this.products = products;
      this.data =  products.map(product => this.desmaterializeProduct(product));
    });

    // Settings
    this.settings = _.assign(this.settings, config.ng2SmartTableDefaultSettings);
  }

  onCreate(event) {
    this.router.navigate(['/products', 'new']);
  }

  onEdit(event) {
    this.router.navigate(['/products', event.data._id]);
  }

  onDelete() {
    console.log('delete');
  }

  private desmaterializeProduct(product: Product): any {
    return {
      _id: product._id,
      name: product.name,
      price: `\$ ${product.price.value} / ${product.price.quantity.value} ${product.price.quantity.unit}`,
      type: product.type,
      subproducts: product.subproducts.length
    };
  }

}

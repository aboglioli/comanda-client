import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../../models';
import { ProductService } from '../../../shared/services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private router: Router,
              private productService: ProductService) { }

  ngOnInit() {
    this.productService.get({type: 'product'}).subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  goToDetail(productId: string) {
    this.router.navigate(['/products', productId]);
  }

}

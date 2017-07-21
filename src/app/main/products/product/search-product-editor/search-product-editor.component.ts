import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

import { ProductService } from '../../../../shared/services';
import { Product } from '../../../../models';

@Component({
  selector: 'app-search-product-editor',
  templateUrl: './search-product-editor.component.html',
  styleUrls: ['./search-product-editor.component.scss']
})
export class SearchProductEditorComponent extends DefaultEditor implements OnInit, AfterViewInit {
  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService) {
    super();
  }

  ngOnInit() {
    if(this.cell.newValue) {
      console.log(this.cell.newValue);
      this.selectedProduct = <Product>this.cell.newValue;
    }
  }

  ngAfterViewInit() {
  }

  onSearch(term: string) {
    if(!term) {
      this.products = null;
      return;
    }

    this.productService.get({name: term})
      .subscribe(products => {
        this.products = products;
      });
  }

  onSelect(product: Product) {
    this.selectedProduct = product;
    this.cell.newValue = product;

    this.products = null;
    // this.onEdited.emit();
  }

  resetSearch() {
    this.selectedProduct = null;
  }
}

import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

import { ProductService } from '../../../../shared/services';
import { Product } from '../../../../models';

@Component({
  selector: 'app-search-input-editor',
  templateUrl: './search-input-editor.component.html',
  styleUrls: ['./search-input-editor.component.scss']
})
export class SearchInputEditorComponent extends DefaultEditor implements AfterViewInit {
  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService) {
    super();
  }

  ngAfterViewInit() {
    console.log(this.cell.newValue);
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

    this.cell.newValue = product.name;

    this.products = null;
    this.onEdited.emit();
  }

  resetSearch() {
    this.selectedProduct = null;
  }
}

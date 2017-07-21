import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

import { ProductService } from '../../../../shared/services';
import { Product } from '../../../../models';
import { config } from '../../../../config';

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

    const selectedProductUnit = this.selectedProduct.price.quantity.unit;

    if(config.units.mass.find(unit => unit.unit === selectedProductUnit)) {
      this.buildUnitList(config.units.mass);
    } else if(config.units.volume.find(unit => unit.unit === selectedProductUnit)) {
      this.buildUnitList(config.units.volume);
    } else {
      this.buildUnitList([{title: 'u', value: 'u'}]);
    }

    this.products = null;
  }

  resetSearch() {
    this.selectedProduct = null;
  }

  private buildUnitList(units) {
    this.cell.getRow().cells[2].getColumn().editor.config.list = units.map(unit => {
      return {
        title: unit.unit,
        value: unit.unit
      }
    });
  }
}

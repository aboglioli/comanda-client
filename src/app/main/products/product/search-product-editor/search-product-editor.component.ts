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
export class SearchProductEditorComponent extends DefaultEditor implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService) {
    super();
  }

  ngOnInit() {
    if(this.cell.newValue) {
      const selectedProduct = <Product>this.cell.newValue;
      this.setSelectedProduct(selectedProduct);
    }
  }

  onSearch(term: string) {
    if(!term) {
      this.products = null;
      return;
    }

    this.productService.get({name: term}).subscribe(products => {
      this.products = products;
    });
  }

  onSelect(product: Product) {
    this.setSelectedProduct(product);
  }

  resetSearch() {
    this.cell.newValue = null;
    this.selectedProduct = null;
    this.products = null;
    this.cell.getRow().getCells().forEach(cell => cell.newValue = '');
  }

  private setSelectedProduct(product: Product) {
    this.selectedProduct = product;
    this.cell.newValue = product;
    this.products = null;

    const selectedProductUnit = this.selectedProduct.price.quantity.unit;

    if(config.units.mass.find(unit => unit.unit === selectedProductUnit)) {
      this.buildUnitList(config.units.mass);
    } else if(config.units.volume.find(unit => unit.unit === selectedProductUnit)) {
      this.buildUnitList(config.units.volume);
    } else {
      this.buildUnitList([{unit: 'u', value: 1}]);
    }
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

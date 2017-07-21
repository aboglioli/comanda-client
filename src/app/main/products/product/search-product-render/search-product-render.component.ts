import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-product-render',
  template: `{{renderValue}}`
})
export class SearchProductRenderComponent implements OnInit {
  renderValue: string;

  @Input() value: any;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = this.value.name;
  }
}

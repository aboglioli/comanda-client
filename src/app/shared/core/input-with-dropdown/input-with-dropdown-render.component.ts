import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-input-with-dropdown-render',
  templateUrl: './input-with-dropdown-render.component.html'
})
export class InputWithDropdownRenderComponent implements ViewCell, OnInit {
  @Input() value: any;
  @Input() rowData: any;

  constructor() {
  }

  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-input-with-dropdown-render',
  templateUrl: './input-with-dropdown-render.component.html',
  styleUrls: ['./input-with-dropdown-render.component.scss']
})
export class InputWithDropdownRenderComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string;
  @Input() rowData: any;

  constructor() { }

  ngOnInit() {
    this.renderValue = this.value;
  }

}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

@Component({
  selector: 'app-input-with-dropdown-editor',
  templateUrl: './input-with-dropdown-editor.component.html'
})
export class InputWithDropdownEditorComponent extends DefaultEditor implements OnInit, AfterViewInit {
  elements: any[];
  selectedUnit: String;
  selectedQuantity: String;

  constructor() {
    super();
  }

  ngOnInit() {
    this.elements = this.cell.getColumn().getConfig().elements;
  }

  ngAfterViewInit() {
    if (this.cell.newValue !== '') {
      this.selectedUnit = this.cell.newValue.unit;
      this.selectedQuantity = this.cell.newValue.value;
    }
  }

  updated() {
    console.log(this.selectedUnit, this.selectedQuantity);
    this.cell.newValue = {
      unit: this.selectedUnit,
      value: this.selectedQuantity
    };
  }

}

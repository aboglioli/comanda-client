import { Component, OnInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

@Component({
  selector: 'app-input-with-dropdown-editor',
  templateUrl: './input-with-dropdown-editor.component.html',
  styleUrls: ['./input-with-dropdown-editor.component.scss']
})
export class InputWithDropdownEditorComponent extends DefaultEditor implements OnInit {
  elements: any[];

  constructor() {
    super();
  }

  ngOnInit() {
    this.elements = this.cell.getColumn().getConfig().elements;
    console.log(this.elements);
  }

}

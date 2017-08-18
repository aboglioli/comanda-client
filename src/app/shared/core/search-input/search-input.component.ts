import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html'
})
export class SearchInputComponent implements OnInit {
  @Input() placeholder: string;

  @Output() search = new EventEmitter<string>();

  searchControl: FormControl;

  constructor() { }

  ngOnInit() {
    this.placeholder = this.placeholder || 'Buscar...';

    this.searchControl = new FormControl();

    this.searchControl.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {
        this.search.emit(<string>term);
      });
  }

}

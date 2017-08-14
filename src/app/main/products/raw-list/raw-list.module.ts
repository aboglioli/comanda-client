import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RawListComponent } from './raw-list.component';
import { DisposableComponent } from './disposable/disposable.component';
import { RawComponent } from './raw/raw.component';
import { PaperComponent } from './paper/paper.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule
  ],
  declarations: [
  ]
})
export class RawListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisposableComponent } from './disposable/disposable.component';
import { RawComponent } from './raw/raw.component';
import { PaperComponent } from './paper/paper.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule
  ],
  declarations: [DisposableComponent, RawComponent, PaperComponent]
})
export class RawListModule { }

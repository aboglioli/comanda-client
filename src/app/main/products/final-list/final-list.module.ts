import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleComponent } from './simple/simple.component';
import { CombinedComponent } from './combined/combined.component';
import { SauceCupComponent } from './sauce-cup/sauce-cup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SimpleComponent, CombinedComponent, SauceCupComponent]
})
export class FinalListModule { }

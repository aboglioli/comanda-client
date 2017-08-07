import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product/product.component';
import { SauceComponent } from './sauce/sauce.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductComponent, SauceComponent]
})
export class IntermediateListModule { }

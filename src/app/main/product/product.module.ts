import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { RawComponent } from './raw/raw.component';
import { SingleComponent } from './single/single.component';
import { CombinationComponent } from './combination/combination.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ProductComponent, RawComponent, SingleComponent, CombinationComponent]
})
export class ProductModule { }

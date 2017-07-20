import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { ProductComponent } from './product.component';
import { RawComponent } from './raw/raw.component';
import { SingleComponent } from './single/single.component';
import { CombinationComponent } from './combination/combination.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    Ng2SmartTableModule
  ],
  declarations: [ProductComponent, RawComponent, SingleComponent, CombinationComponent]
})
export class ProductModule { }

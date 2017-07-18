import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    ProductModule,
    UserModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsModule } from './products/products.module';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    ProductsModule,
    UserModule
  ],
  declarations: [MainComponent, HomeComponent]
})
export class MainModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { SharedModule } from '../../shared/shared.module';
import { ProductsComponent } from './products.component';

import { RawListComponent } from './raw-list/raw-list.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ProductComponent } from './product/product.component';
import { SearchProductEditorComponent } from './product/search-product-editor/search-product-editor.component';
import { SearchProductRenderComponent } from './product/search-product-render/search-product-render.component';
import { SubproductsComponent } from './product/subproducts/subproducts.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ProductsComponent,
    ProductComponent,
    RawListComponent,
    ProductListComponent,
    SearchProductEditorComponent,
    SearchProductRenderComponent,
    SubproductsComponent
  ],
  entryComponents: [
    SearchProductEditorComponent,
    SearchProductRenderComponent
  ]
})
export class ProductsModule { }

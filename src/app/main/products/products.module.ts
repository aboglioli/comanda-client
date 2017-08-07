import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { SharedModule } from '../../shared/shared.module';
import { RawListModule } from './raw-list/raw-list.module';
import { IntermediateListModule } from './intermediate-list/intermediate-list.module';
import { FinalListModule } from './final-list/final-list.module';
import { ProductsComponent } from './products.component';

import { RawListComponent } from './raw-list/raw-list.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ProductComponent } from './product/product.component';
import { SearchProductEditorComponent } from './product/search-product-editor/search-product-editor.component';
import { SearchProductRenderComponent } from './product/search-product-render/search-product-render.component';
import { SubproductsComponent } from './product/subproducts/subproducts.component';
import { IntermediateListComponent } from './intermediate-list/intermediate-list.component';
import { FinalListComponent } from './final-list/final-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    Ng2SmartTableModule,
    RawListModule,
    IntermediateListModule,
    FinalListModule
  ],
  declarations: [
    ProductsComponent,
    ProductComponent,
    RawListComponent,
    ProductListComponent,
    SearchProductEditorComponent,
    SearchProductRenderComponent,
    SubproductsComponent,
    IntermediateListComponent,
    FinalListComponent
  ],
  entryComponents: [
    SearchProductEditorComponent,
    SearchProductRenderComponent
  ]
})
export class ProductsModule { }

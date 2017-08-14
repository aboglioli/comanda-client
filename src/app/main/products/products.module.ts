import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { SharedModule } from '../../shared/shared.module';

// product detail
import { ProductComponent } from './product/product.component';

// raw products
import { RawListComponent } from './raw-list/raw-list.component';
import { RawComponent } from './raw-list/raw.component';
import { DisposableComponent } from './raw-list/disposable.component';
import { PaperComponent } from './raw-list/paper.component';

// intermediate products
import { IntermediateListComponent } from './intermediate-list/intermediate-list.component';

// final products
import { FinalListComponent } from './final-list/final-list.component';


// common components
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
    // common components
    SearchProductEditorComponent,
    SearchProductRenderComponent,
    SubproductsComponent,

    // product detail
    ProductComponent,

    // raw products
    RawListComponent,
    DisposableComponent,
    RawComponent,
    PaperComponent,

    // intermediate products
    IntermediateListComponent,

    // final products
    FinalListComponent
  ],
  entryComponents: [
    SearchProductEditorComponent,
    SearchProductRenderComponent
  ]
})
export class ProductsModule { }

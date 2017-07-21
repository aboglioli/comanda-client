import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { ProductsComponent } from './product.component';
import { RawListComponent } from './raw/raw.component';
import { SingleComponent } from './single/single.component';
import { CombinationComponent } from './combination/combination.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SearchProductEditorComponent } from './single/search-product-editor/search-product-editor.component';
import { SearchProductRenderComponent } from './single/search-product-render/search-product-render.component';
import { SubproductsComponent } from './single/subproducts/subproducts.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    Ng2SmartTableModule
  ],
  declarations: [ProductsComponent, RawListComponent, SingleComponent, CombinationComponent, SearchProductEditorComponent, SearchProductRenderComponent, SubproductsComponent],
  entryComponents: [SearchProductEditorComponent, SearchProductRenderComponent]
})
export class ProductsModule { }

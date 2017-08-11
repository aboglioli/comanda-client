import { Routes } from '@angular/router';

// RawList
import { RawListComponent } from './raw-list/raw-list.component';
import { RawComponent } from './raw-list/raw/raw.component';
import { DisposableComponent } from './raw-list/disposable/disposable.component';
import { PaperComponent } from './raw-list/paper/paper.component';

import { ProductListComponent } from './product-list/product-list.component';

import { ProductComponent } from './product/product.component';

export const routes = [{
  path: 'products',
  children: [
    {
      path: '',
      component: ProductListComponent,
      pathMatch: 'full'
    },
    {
      path: 'raw',
      component: RawListComponent,
      children: [
        {
          path: '',
          pathMatch: 'full',
          component: RawComponent
        },
        {
          path: 'disposable',
          component: DisposableComponent
        },
        {
          path: 'papers',
          component: PaperComponent
        }
      ]
    },
    {
      path: 'new',
      component: ProductComponent
    },
    {
      path: ':productId',
      component: ProductComponent
    },
  ]
}];

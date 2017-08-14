import { Routes } from '@angular/router';

// raw
import { RawListComponent } from './raw-list/raw-list.component';
import { RawComponent } from './raw-list/raw.component';
import { DisposableComponent } from './raw-list/disposable.component';
import { PaperComponent } from './raw-list/paper.component';

// intermediate

// final

// detail or new
import { ProductComponent } from './product/product.component';

export const routes = [{
  path: 'products',
  children: [
    // raw
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

    // detail or new
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

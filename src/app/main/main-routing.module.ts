import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

// Product
import { ProductComponent } from './product/product.component';
import { RawComponent } from './product/raw/raw.component';
import { SingleComponent } from './product/single/single.component';
import { CombinationComponent } from './product/combination/combination.component';

// User
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'products',
        component: ProductComponent,
        children: [
          {
            path: 'raw',
            component: RawComponent
          },
          {
            path: 'single',
            component: SingleComponent
          },
          {
            path: 'combination',
            component: CombinationComponent
          }
        ]
      },
      {
        path: 'users',
        component: UserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

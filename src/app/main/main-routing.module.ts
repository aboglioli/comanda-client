import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

// Home
import { HomeComponent } from './home/home.component';

// Product
import { ProductsComponent } from './products/products.component';
import { RawListComponent } from './products/raw-list/raw-list.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';

// User
import { UserComponent } from './user/user.component';

// Guards
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'products',
        component: ProductsComponent,
        children: [
          {
            path: '',
            component: ProductListComponent,
            pathMatch: 'full'
          },
          {
            path: 'raw',
            component: RawListComponent
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
      },
      {
        path: 'users',
        component: UserComponent
      },
      {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

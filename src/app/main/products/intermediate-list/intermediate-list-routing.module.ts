import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntermediateListComponent } from './intermediate-list.component';

import { ProductComponent } from './product/product.component';
import { SauceComponent } from './sauce/sauce.component';

const routes: Routes = [
  {
    path: 'intermedios',
    component: IntermediateListComponent,
    children: [
      {
        path: 'productos',
        component: ProductComponent,
        pathMatch: 'full'
      },
      {
        path: 'salsas',
        component: SauceComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntermediateListRoutingModule { }

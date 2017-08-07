import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalListComponent } from './final-list.component';

import { SimpleComponent } from './simple/simple.component';
import { CombinedComponent } from './combined/combined.component';
import { SauceCupComponent } from './sauce-cup/sauce-cup.component';

const routes: Routes = [
  {
    path: 'final',
    component: FinalListComponent,
    children: [
      {
        path: 'simples',
        component: SimpleComponent,
        pathMatch: 'full'
      },
      {
        path: 'combinados',
        component: CombinedComponent,
      },
      {
        path: 'vasos-de-salsa',
        component: SauceCupComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinalListRoutingModule { }

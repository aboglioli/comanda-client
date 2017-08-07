import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RawListComponent } from './raw-list.component';

import { DisposableComponent } from './disposable/disposable.component';
import { PaperComponent } from './paper/paper.component';
import { RawComponent } from './raw/raw.component';


const routes: Routes = [
  {
    path: '',
    component: RawListComponent,
    children: [
      {
        path: 'papeles',
        component: PaperComponent,
      },
      {
        path: 'insumos',
        component: RawComponent,
      },
      {
        path: 'descartables',
        component: DisposableComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RawListRoutingModule { }

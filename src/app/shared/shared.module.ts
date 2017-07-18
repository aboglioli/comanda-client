import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AccountService } from './services';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    NavbarComponent,
    SidebarComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AccountService
      ]
    }
  }
}

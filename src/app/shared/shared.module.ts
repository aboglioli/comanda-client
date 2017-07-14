import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './core/navbar/navbar.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [

      ]
    }
  }
}

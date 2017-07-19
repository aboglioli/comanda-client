import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { CommonModule } from '@angular/common';

import { HttpService, CacheService, AccountService, UserService } from './services';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';

export function httpServiceFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, cacheService: CacheService) {
  return new HttpService(xhrBackend, requestOptions, cacheService);
}

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
        {
          provide: Http,
          useFactory: httpServiceFactory,
          deps: [XHRBackend, RequestOptions, CacheService]
        },
        CacheService,
        AccountService,
        UserService
      ]
    };
  }
}

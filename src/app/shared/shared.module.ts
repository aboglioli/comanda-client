import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { CommonModule } from '@angular/common';

import { HttpService, CacheService, LoadingService, AccountService, UserService } from './services';
import { AuthGuard } from './guards/auth.guard';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ProgressBarComponent } from './core/progress-bar/progress-bar.component';

export function httpServiceFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, cacheService: CacheService, loadingService: LoadingService) {
  return new HttpService(xhrBackend, requestOptions, cacheService, loadingService);
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ProgressBarComponent
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    NavbarComponent,
    SidebarComponent,
    ProgressBarComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthGuard,
        {
          provide: Http,
          useFactory: httpServiceFactory,
          deps: [XHRBackend, RequestOptions, CacheService, LoadingService]
        },
        LoadingService,
        CacheService,
        AccountService,
        UserService
      ]
    };
  }
}

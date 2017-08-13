import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NotificationsService } from 'angular2-notifications';

import {
  HttpService,
  CacheService,
  LoadingService,
  AccountService,
  UserService,
  NotificationService,
  ProductService
} from './services';
import { AuthGuard } from './guards/auth.guard';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ProgressBarComponent } from './core/progress-bar/progress-bar.component';
import { NotificationComponent } from './core/notification/notification.component';
import { SearchInputComponent } from './core/search-input/search-input.component';

export function httpServiceFactory(
  xhrBackend: XHRBackend,
  requestOptions: RequestOptions,
  cacheService: CacheService,
  loadingService: LoadingService,
  notificationsService: NotificationsService
) {
  return new HttpService(xhrBackend, requestOptions, cacheService, loadingService, notificationsService);
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ProgressBarComponent,
    NotificationComponent,
    SearchInputComponent
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    NavbarComponent,
    SidebarComponent,
    ProgressBarComponent,
    NotificationComponent,
    SearchInputComponent
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
          deps: [XHRBackend, RequestOptions, CacheService, LoadingService, NotificationService]
        },
        LoadingService,
        NotificationService,
        CacheService,
        AccountService,
        UserService,
        ProductService
      ]
    };
  }
}

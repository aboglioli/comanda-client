import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
  ProductService
} from './services';
import { AuthGuard } from './guards/auth.guard';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ProgressBarComponent } from './core/progress-bar/progress-bar.component';
import { SearchInputComponent } from './core/search-input/search-input.component';
import { InputWithDropdownEditorComponent } from './core/input-with-dropdown/input-with-dropdown-editor.component';
import { InputWithDropdownRenderComponent } from './core/input-with-dropdown/input-with-dropdown-render.component';

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
    FormsModule
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ProgressBarComponent,
    SearchInputComponent,
    InputWithDropdownEditorComponent,
    InputWithDropdownRenderComponent
  ],
  entryComponents: [
    InputWithDropdownEditorComponent,
    InputWithDropdownRenderComponent
  ],
  exports: [
    // common modules
    RouterModule,
    ReactiveFormsModule,

    // common ui elements
    NavbarComponent,
    SidebarComponent,
    ProgressBarComponent,
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
          deps: [XHRBackend, RequestOptions, CacheService, LoadingService, NotificationsService]
        },
        LoadingService,
        CacheService,
        AccountService,
        UserService,
        ProductService
      ]
    };
  }
}

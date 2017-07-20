import { Injectable } from '@angular/core';
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers, XHRBackend } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { environment } from '../../../environments/environment';
import { CacheService } from './cache.service';
import { LoadingService } from './loading.service';
import { NotificationService } from './notification.service';

@Injectable()
export class HttpService extends Http {
  constructor(backend: ConnectionBackend,
              defaultOptions: RequestOptions,
              private cache: CacheService,
              private loadingService: LoadingService,
              private notificationService: NotificationService) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this.beforeRequest();

    url = this.updateUrl(url);

    return super.get(url, this.getRequestOptionArgs(options))
      .catch((error: Response, caught: Observable<any>) => this.onCatch(error, caught))
      .do(() => this.afterRequest());
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    this.beforeRequest();

    url = this.updateUrl(url);

    return super.post(url, body, this.getRequestOptionArgs(options))
      .catch((error: Response, caught: Observable<any>) => this.onCatch(error, caught))
      .do(() => this.afterRequest());
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    this.beforeRequest();

    url = this.updateUrl(url);

    return super.put(url, body, this.getRequestOptionArgs(options))
      .catch((error: Response, caught: Observable<any>) => this.onCatch(error, caught))
      .do(() => this.afterRequest());
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this.beforeRequest();

    url = this.updateUrl(url);

    return super.delete(url, this.getRequestOptionArgs(options))
      .catch((error: Response, caught: Observable<any>) => this.onCatch(error, caught))
      .do(() => this.afterRequest());
  }

  private updateUrl(req: string) {
    return environment.baseUrl + req;
  }

  private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }

    options.headers.append('Content-Type', 'application/json');

    if(this.cache.has('authToken')) {
      options.headers.append('Authorization', this.cache.get('authToken'));
    }

    return options;
  }

  private beforeRequest() {
    this.loadingService.showLoader();
  }

  private afterRequest() {
    this.loadingService.hideLoader();
  }

  private onCatch(error: Response, caught: Observable<any>): Observable<any> {
    console.log(error);

    if(error.json().message === 'Invalid credentials') {
      this.notificationService.notify('Credenciales inválidas', 'warning');
    } else {
      this.notificationService.notify('Error en el servidor', 'danger');
    }

    this.afterRequest();
    return Observable.throw(error);
  }
}

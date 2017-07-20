import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { Product } from '../../models';
import { NotificationService } from './notification.service';

@Injectable()
export class ProductService {

  constructor(private http: Http,
              private notificationService: NotificationService) { }

  get(): Observable<Product[]> {
    return this.http.get('/products')
      .map(res => <Product[]>res.json());
  }

  getById(ProductId: string): Observable<Product> {
    return this.http.get('/products/' + ProductId)
      .map(res => <Product>res.json());
  }

  post(Product: Product): Observable<Product> {
    return this.http.post('/products', JSON.stringify(Product))
      .map(res => <Product>res.json())
      .do(() => this.notificationService.notify('Producto creado'));
  }

  put(ProductId: string, Product: Product): Observable<Product> {
    return this.http.put('/products/' + ProductId, JSON.stringify(Product))
      .map(res => <Product>res.json())
      .do(() => this.notificationService.notify('Producto modificado'));
  }

  delete(ProductId: string): Observable<Product> {
    return this.http.delete('/products/' + ProductId)
      .map(res => <Product>res.json())
      .do(() => this.notificationService.notify('Producto eliminado'));
  }
}


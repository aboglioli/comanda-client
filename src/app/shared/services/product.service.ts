import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { Product, Subproduct } from '../../models';
import { NotificationService } from './notification.service';

@Injectable()
export class ProductService {

  constructor(private http: Http,
              private notificationService: NotificationService) { }

  get({name, type}: {name?: string, type?: string} = {}): Observable<Product[]> {
    const search = new URLSearchParams();

    if(name) {
      search.append('name', name);
    }

    if(type) {
      search.append('type', type);
    }

    return this.http.get('/products', {search})
      .map(res => <Product[]>res.json());
  }

  getById(productId: string): Observable<Product> {
    return this.http.get('/products/' + productId)
      .map(res => <Product>res.json());
  }

  getSubproducts(productId: string): Observable<Subproduct[]> {
    return this.http.get('/products/' + productId + '/subproducts')
      .map(res => <Subproduct[][]>res.json());
  }

  post(Product: Product): Observable<Product> {
    return this.http.post('/products', JSON.stringify(Product))
      .map(res => <Product>res.json())
      .do(() => this.notificationService.notify('Producto creado'));
  }

  put(productId: string, Product: Product): Observable<Product> {
    return this.http.put('/products/' + productId, JSON.stringify(Product))
      .map(res => <Product>res.json())
      .do(() => this.notificationService.notify('Producto modificado'));
  }

  delete(productId: string): Observable<Product> {
    return this.http.delete('/products/' + productId)
      .map(res => <Product>res.json())
      .do(() => this.notificationService.notify('Producto eliminado'));
  }

  calculatePrice(subproducts: Subproduct[]): Observable<{price: number}> {
    return this.http.post('/products/price', JSON.stringify({products: subproducts}))
      .map(res => res.json());
  }
}

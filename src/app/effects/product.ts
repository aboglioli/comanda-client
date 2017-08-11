import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Product, Subproduct } from '../models';
import { ProductService } from '../shared/services';
import * as productReducer from '../reducers/product';


@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions,
              private productService: ProductService) {}

  @Effect()
  getById$: Observable<Action> = this.actions$
    .ofType(productReducer.GET_BY_ID)
    .map(toPayload)
    .switchMap(productId => {
      return Observable.forkJoin(
        this.productService.getById(productId),
        this.productService.getSubproducts(productId)
      ).map(([product, subproducts]: [Product, Subproduct[]]) => {
        return {
          type: productReducer.SET,
          payload: {
            ...product,
            subproducts
          }
        }
      });
    });
}

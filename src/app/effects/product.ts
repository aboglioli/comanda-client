import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ProductService } from '../shared/services';
import * as product from '../reducers/product';


@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions,
              private productService: ProductService) {}

  @Effect()
  getById$: Observable<Action> = this.actions$
    .ofType(product.GET_BY_ID)
    .map(toPayload)
    .switchMap(productId => {
      return this.productService.getById(productId)
        .map(payload => ({type: product.SET, payload}));
    });
}

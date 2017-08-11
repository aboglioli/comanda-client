import { ActionReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import * as Product from './product';

export interface AppState {
  router: any;
  product: Product.State;
}

export const reducers = {
  router: routerReducer,
  product: Product.reducer,
};

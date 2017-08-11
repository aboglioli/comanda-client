import { Product, Subproduct } from '../models/product.interface';

export const SET = '[Product] Set';
export const RESET = '[Product] Reset';
export const GET_BY_ID = '[Product] GetById';

export type State = Product;

const initialState: State = {
  _id: null,
  name: '',
  description: '',
  type: '',
  price: {
    value: 0,
    quantity: {
      value: 0,
      unit: 'u'
    }
  },
  subproducts: []
};

export function reducer(state = initialState, {type, payload}): State {
  switch(type) {
    case SET: {
      return {...state, ...payload};
    }

    case RESET: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

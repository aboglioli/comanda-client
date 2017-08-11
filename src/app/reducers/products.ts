import { Product } from '../models/product.interface';

export const SET = '[Products] Set';
export const ADD = '[Products] Add';
export const REMOVE = '[Products] Remove';

export type State = string[];

const initialState: State = [];

export function reducer(state = initialState, {type, payload}): State {
  switch(type) {
    case SET: {
      return payload;
    }

    case ADD: {
      return [...state, payload];
    }

    case REMOVE: {
      return state.filter(product => product !== payload);
    }

    default: {
      return state;
    }
  }
}

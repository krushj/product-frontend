import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../model/product';
import * as productAction from '../actions/product.actions';

export interface IProductState {
  product : IProduct | null,
  error: string
}


const initialState: IProductState = {
    product : null,
    error: ''
}

export const ProductReducer = createReducer(
  initialState,
  // data fetch is done successfully and now assigning the products to state
  on(productAction.__productRequestSuccess, (state, { product }) => ({
    ...state,
    error: '',
    product: product,
  })),

  // data fetch failed, so setting error in state
  on(productAction.__productRequestFailure, (state, {error}) => ({
    ...state,
    error
  })),

  on(productAction.__removeProductRequestSubmit, (state) => ({...state , product : null}))
);

import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../model/product';
import * as productAction from '../actions/products.actions';

export interface IProductsState {
  products: IProduct[];
  error: string;
}

const initialState: IProductsState = {
  products: [],
  error: '',
};

export const ProductsReducer = createReducer(
  initialState,
  // data fetch is done successfully and now assigning the products to state
  on(productAction.productsRequestSuccess, (state, { products }) => ({
    error: '',
    products: products,
  })),

  // data fetch failed, so setting error in state
  on(productAction.productsRequestFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

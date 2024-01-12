import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../model/product';
import * as productAction from '../actions/products.actions';

export interface IProductsState {
  isLoading: boolean
  products: IProduct[];
  error: string;
}

const initialState: IProductsState = {
  products: [],
  error: '',
  isLoading: false
};

export const ProductsReducer = createReducer(
  initialState,
  // data fetch is done successfully and now assigning the products to state
  on(productAction.productsRequestSuccess, (state, { products }) => ({
    isLoading: false,
    error: '',
    products: products,
  })),

  // data fetch failed, so setting error in state
  on(productAction.productsRequestFailure, (state, { error }) => ({
    products: [],
    error,
    isLoading: true
  }))
);

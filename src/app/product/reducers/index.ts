// app.reducer.ts
import {
  combineReducers,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { IProductsState, ProductsReducer } from './products.reducer';
import { IProductState, ProductReducer } from './product.reducer';

export interface IProductModuleState {
  __product: IProductState;
  products: IProductsState;
}

export const ProductModuleReducer = combineReducers({
  __product: ProductReducer,
  products: ProductsReducer,
});

export const getProductBaseFeature =
  createFeatureSelector<IProductModuleState>('productBase');

export const selectProductBaseState = createSelector(
  getProductBaseFeature,
  (state) => state
);

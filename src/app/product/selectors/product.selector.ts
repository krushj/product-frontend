import { createSelector } from '@ngrx/store';
import { selectProductBaseState } from '../reducers';

export const __selectProduct = createSelector(
  selectProductBaseState,
  (state) => state.__product.product
);
export const __selectProductError = createSelector(
  selectProductBaseState,
  (state) => state.__product.error
);

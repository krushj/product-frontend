import { createSelector } from '@ngrx/store';
import { selectProductBaseState } from '../reducers';

export const selectProducts = createSelector(
  selectProductBaseState,
  (state) => state.products.products
);

export const selectLoading = createSelector(
  selectProductBaseState,
  (state) => state.products.isLoading
);

export const selectProductsError = createSelector(
  selectProductBaseState,
  (state) => state.products.error
);

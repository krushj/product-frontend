import { createAction, props } from '@ngrx/store';
import { IProduct } from '../model/product';

const productsRequestSubmit = createAction('[Products Request] GET');
const productsRequestSuccess = createAction(
  '[Products Request] SUCCESS',
  props<{ products: IProduct[] }>()
);
const productsRequestFailure = createAction(
  '[Products Request] FAILURE',
  props<{ error: string }>()
);

export {
  productsRequestSubmit,
  productsRequestSuccess,
  productsRequestFailure,
};

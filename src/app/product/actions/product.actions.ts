import { createAction, props } from '@ngrx/store';
import { IProduct } from '../model/product';

const __productRequestSubmit = createAction(
  '[Product Request] GET',
  props<{ productId: string }>()
);
const __productRequestSuccess = createAction(
  '[Product Request] SUCCESS',
  props<{ product: IProduct }>()
);
const __productRequestFailure = createAction(
  '[Product Request] FAILURE',
  props<{ error: string }>()
);

const __removeProductRequestSubmit = createAction(
  '[Product Remove Request] GET'
);

export {
  __productRequestSubmit,
  __productRequestSuccess,
  __productRequestFailure,
  __removeProductRequestSubmit,
};

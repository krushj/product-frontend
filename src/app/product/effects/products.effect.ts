import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap } from 'rxjs';
import * as productActions from '../actions/products.actions';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsEffeect {
  productRequest$ = createEffect(() =>
    this.action$.pipe(
      ofType(productActions.productsRequestSubmit),
      switchMap(() => {
        return this.productService.getProducts().pipe(
          map((products) => {
            return productActions.productsRequestSuccess({ products });
          }),
          catchError((error) =>
            of(
              productActions.productsRequestFailure({
                error: error.error.message,
              })
            )
          )
        );
      })
    )
  );

  constructor(
    private action$: Actions,
    private productService: ProductService
  ) {}
}

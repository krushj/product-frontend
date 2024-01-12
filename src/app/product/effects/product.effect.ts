import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map,  of, switchMap } from 'rxjs';
import * as productActions  from '../actions/product.actions';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductEffeect {        
    getProductEffect$ = createEffect(() => {
        return this.action$.pipe(
            ofType(productActions.__productRequestSubmit),
            switchMap(({productId}) => {
                return this.productService.getProduct(productId).pipe(
                    map((product) => {return productActions.__productRequestSuccess({product})}),
                    catchError(error => of(productActions.__productRequestFailure({error : 'product not found'})))
                )
            })
        )
    }) 
  constructor(private action$: Actions, private productService: ProductService) {}
}

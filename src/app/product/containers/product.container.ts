import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/product';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import {
  __selectProduct,
  __selectProductError,
} from '../selectors/product.selector';
import { __productRequestSubmit } from '../actions/product.actions';

@Component({
  selector: 'product-container',
  template: `
    <div style="padding: 1rem 2rem;">
      <product-page [product]="product$ | async" />
    </div>`,
})
export class ProductContainerComponent implements OnInit {
  product$: Observable<IProduct | null>;
  error$: Observable<string>;

  constructor(private store: Store, private router: ActivatedRoute) {
    const id = this.router.snapshot.params['id'];
    this.store.dispatch(__productRequestSubmit({ productId: id }));
    this.product$ = store.select(__selectProduct);
    this.error$ = store.select(__selectProductError);
  }

  ngOnInit() {
    
  }
}

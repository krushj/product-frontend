import { Component, HostListener, OnInit } from '@angular/core';
import { IProduct } from '../model/product';
import { Store } from '@ngrx/store';
import { Observable, filter, map, startWith } from 'rxjs';
import { productsRequestSubmit } from '../actions/products.actions';
import { selectProducts } from '../selectors/products.selector';
import { __removeProductRequestSubmit } from '../actions/product.actions';
import { loadToken } from '../../auth/actions/token.actions';

@Component({
  selector: 'product-container',
  template: `
    <div class="products-container">
      <div class="searchBar">
        <mat-form-field>
          <mat-label>search product</mat-label>
          <input matInput [(ngModel)]="filterTerm" type="text" (ngModelChange)="filterProducts()"/>
        </mat-form-field>
      </div>
      <mat-grid-list [cols]="gridCols" rowHeight="3:2">
        <mat-grid-tile
          *ngFor="let product of filteredProducts$ | async"
          style="margin: 10px;"
        >
          <app-product-card [cardData]="product" />
        </mat-grid-tile>
      </mat-grid-list>
    </div>
  `,
  styles: [
    `
      .searchBar {
        margin: 1rem;
        display : flex;
        flex-direction: row-reverse;
      }
    `,
  ],
})
export class ProductsContainerComponent implements OnInit {
  gridCols!: number;

  products$: Observable<IProduct[]>;
  filteredProducts$: Observable<IProduct[]>;
  filterTerm: string = '';

  constructor(private store$: Store) {
    this.store$.dispatch(loadToken())
    this.products$ = this.store$.select(selectProducts);
    this.setGridCols(window.innerWidth);
    this.filteredProducts$ = this.products$; // Initialize with all products
    this.store$.dispatch(__removeProductRequestSubmit())
    // Initially, start with all products
    this.filterProducts();
  }

  filterProducts(): void {
    this.filteredProducts$ = this.products$.pipe(
      map(products => {
        // If the filter term is empty, return all products
        if (this.filterTerm.trim() === '') {
          return products;
        }

        // Otherwise, filter products based on the title
        return products.filter(product => product.title.toUpperCase().includes(this.filterTerm.toUpperCase()));
      }),
      startWith([]) // Ensure the observable starts with an initial value (empty array)
    );
  }
  
  ngOnInit(): void {
    this.store$.dispatch(productsRequestSubmit());
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.setGridCols((event.target as Window).innerWidth);
  }

  private setGridCols(width: number): void {
    this.gridCols =
      width <= 720 ? 1 : width <= 1080 ? 2 : width <= 1440 ? 3 : 4;
  }

}

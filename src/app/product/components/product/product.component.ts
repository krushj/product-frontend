import { Component, HostListener, Input, OnInit } from '@angular/core';
import { __selectProduct, __selectProductError } from '../../selectors/product.selector';
import { __productRequestSubmit, __productRequestSuccess } from '../../actions/product.actions';
import { IProduct } from '../../model/product';

@Component({
  selector: 'product-page',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent {
  
  @Input()
  product !: IProduct | null;

  isSmallScreen: boolean | undefined;

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isSmallScreen = window.innerWidth <= 600; // Adjust the threshold as needed
  }


}

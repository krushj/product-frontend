import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductComponent } from './components/product/product.component';
import { MaterialModule } from '../material.module';
import { CarouselComponent } from './components/product/carousel/carousel.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffeect } from './effects/products.effect';
import { ProductEffeect } from './effects/product.effect';
import { ProductModuleReducer } from './reducers';
import { ProductContainerComponent } from './containers/product.container';
import { ProductsContainerComponent } from './containers/products.container';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductComponent,
    CarouselComponent,
    ProductContainerComponent,
    ProductsContainerComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    StoreModule.forFeature("productBase",ProductModuleReducer),
    EffectsModule.forFeature([ProductsEffeect, ProductEffeect ]),
    //StoreRouterConnectingModule.forRoot(),
  ]
})
export class ProductModule { }

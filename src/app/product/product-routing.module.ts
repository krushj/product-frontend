import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsContainerComponent } from './containers/products.container';
import { ProductContainerComponent } from './containers/product.container';

const routes: Routes = [
  { path: '', component: ProductsContainerComponent},
  { path: 'get/:id', component: ProductContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

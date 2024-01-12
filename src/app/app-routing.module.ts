import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from './auth/containers/login.container';
import { AuthGuard } from './AuthGaurd';

const routes: Routes = [
  { path: '', component: LoginContainerComponent },
  { path: 'login', redirectTo: "",  pathMatch:'full' },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule), canActivate: [AuthGuard] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

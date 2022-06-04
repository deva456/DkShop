import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutProductsComponent } from './components/checkout-products/checkout-products.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
  path: '',component: HomeComponent
  },


  {
    path: 'checkout-products', component:CheckoutProductsComponent
  },
  {
    path:'checkout', component:CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

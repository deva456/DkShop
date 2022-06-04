import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { CheckoutProductsComponent } from './components/checkout-products/checkout-products.component';

//import { GirlsclothsComponent } from './components/girlscloths/girlscloths.component';
import { HomeComponent } from './components/home/home.component';
//import { LaptopsComponent } from './components/laptops/laptops.component';
import { LoginComponent } from './components/login/login.component';
//import { MensclothsComponent } from './components/menscloths/menscloths.component';
//import { MobilesComponent } from './components/mobiles/mobiles.component';
//import { ProductsComponent } from './components/products/products.component';
//import { ThankyouComponent } from './components/thankyou/thankyou.component';
//import { WatchComponent } from './components/watch/watch.component';
const routes: Routes = [
  {
  path: '',component: HomeComponent
  },
  // {
  //   path: 'login',component: LoginComponent
  //   },
  // {
  //   path:'menscloths',component: MensclothsComponent
  // },

  // {
  //   path:'girlscloths',component: GirlsclothsComponent
  // },
  // {
  //   path:'laptops', component:LaptopsComponent
  // },

  // {
  //   path:'mobiles', component:MobilesComponent
  // },
  // {
  //   path:'watch', component:WatchComponent
  // },

  // {
  //   path: 'product/:id', component: ProductsComponent
  // },
  // {
  //   path: 'thankyou', component: ThankyouComponent
  // },
  {
    path: 'checkout-products', component:CheckoutProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

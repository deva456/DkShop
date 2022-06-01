import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { GirlsclothsComponent } from './components/girlscloths/girlscloths.component';
import { HomeComponent } from './components/home/home.component';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { ProductsComponent } from './components/products/products.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { WatchComponent } from './components/watch/watch.component';
const routes: Routes = [
  {
  path: '',component: HomeComponent
  },

  {
<<<<<<< HEAD
    path:'girlscloths', component:GirlsclothsComponent
=======
    path:'girlscloths',component: GirlsclothsComponent
>>>>>>> 93968a3b6ec08ae3357df670261e984e4f69610e
  },
  {
    path:'laptops', component:LaptopsComponent
  },

  {
    path:'mobiles', component:MobilesComponent
  },
  {
    path:'watch', component:WatchComponent
  },
  {
    path: 'cart', component:CartComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'product/:id', component: ProductsComponent
  },
  {
    path: 'thankyou', component: ThankyouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

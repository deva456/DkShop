import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { MatCardModule } from '@angular/material/card';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './components/banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { WatchComponent } from './components/watch/watch.component';
<<<<<<< HEAD
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 93968a3b6ec08ae3357df670261e984e4f69610e
import { GirlsclothsComponent } from './components/girlscloths/girlscloths.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CheckoutComponent,
    HomeComponent,
    ProductsComponent,
    ThankyouComponent,
    BannerComponent,
    LaptopsComponent,
    MobilesComponent,
    WatchComponent,
<<<<<<< HEAD
    GirlsclothsComponent
=======
    GirlsclothsComponent,
//HttpClientModule
>>>>>>> 93968a3b6ec08ae3357df670261e984e4f69610e

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

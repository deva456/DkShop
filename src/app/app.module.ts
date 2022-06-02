import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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

import { GirlsclothsComponent } from './components/girlscloths/girlscloths.component';
import { LoginComponent } from './components/login/login.component';

import { NgModel } from '@angular/forms';
import { CheckoutProductsComponent } from './components/checkout-products/checkout-products.component';
import { MensclothsComponent } from './components/menscloths/menscloths.component';


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
    GirlsclothsComponent,
    LoginComponent,
    CheckoutProductsComponent,
    MensclothsComponent





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModule,
    MatCardModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

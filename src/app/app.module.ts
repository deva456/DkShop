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
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { CheckoutProductsComponent } from './components/checkout-products/checkout-products.component';


import { ToastrModule } from 'ngx-toastr';
import { FilterPipe } from './shared/filter.pipe';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { ProductService } from './services/product.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CheckoutComponent,
    HomeComponent,
    LoginComponent,
    CheckoutProductsComponent,
    ThankyouComponent,
FilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModule,
    MatCardModule,

    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
    ToastrModule.forRoot({
      timeOut:2000,
      progressAnimation: 'increasing',
      progressBar:true,
      positionClass:'toast-bottom-right'
        })
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

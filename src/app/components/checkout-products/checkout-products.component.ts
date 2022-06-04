import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/iproduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {

  public product:any=[];
  public grandTotal!:number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.getProducts()
    .subscribe(res=>{
      this.product=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }

  removeItem(item:IProduct){
this.cartService.removeCartItem(item)
  }

  calculatePrice(){

    this.grandTotal=this.cartService.getTotalPrice();

  }

  emptycart(){
    this.cartService.removeAllCart();
  }

  inc(product:any){
    if(product.quantity!=10){
    product.quantity+=1;
    this.cartService.addtoCart(product);
    }
  }

  dec(product:any){
    if(product.quantity!=1){
    product.quantity-=1;
    this.cartService.removeCartItem(product);
    }
  }



}

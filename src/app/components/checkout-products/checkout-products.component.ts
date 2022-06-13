import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IProduct } from 'src/app/iproduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {

  public product:IProduct[]=[];
  public grandTotal!:number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.getProducts()
    .subscribe(res=>{
      this.product=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
   }

  removeItem(item:any){
this.cartService.removeCartItem(item);
this.calculatePrice();
  }

  calculatePrice(){
    this.grandTotal=this.cartService.getTotalPrice();
  }

  emptycart(){

    this.cartService.removeAllCart();
  }

  inc(product_id:any,quantity:any){
    for(let i =0; i<this.product.length;i++){
      if(this.product[i].product_id===product_id){
        if(quantity!=5){
        this.product[i].quantity=parseInt(quantity)+1;
        }
      }
    }
  }



  dec(product_id:any,quantity:any){
    for(let i =0; i<this.product.length;i++){
      if(this.product[i].product_id===product_id){
        if(quantity!=1){
        this.product[i].quantity=parseInt(quantity)-1;
        }
      }
    }
  }

// addToCart(product:IProduct){
//   const thecartitem=new  CartItem(product);
// this.cartService.addToCart(thecartitem)
// }

}


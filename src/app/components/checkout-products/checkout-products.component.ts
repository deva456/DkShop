import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
  public totalItem: number=0;
  constructor(private cartService: CartService, private toastr:ToastrService) { }

  ngOnInit(): void {

    this.cartService.getProducts()
    .subscribe(res=>{
      this.product=res;
      this.totalItem = res.length;
      this.grandTotal=this.cartService.getTotalPrice();
    })
   }

  //  showRemoveMessage(){
  //   this.toastr.error('item removed successfully!','Removed item')
  //  }

  removeItem(item:any){
this.cartService.removeCartItem(item);
item.addedtocart=false;
localStorage.setItem('wishlistcart',JSON.stringify(this.product))
  }

  emptycart(){

    this.cartService.removeAllCart();
  }

  inc(product_id:any,quantity:any){
    for(let i =0; i<this.product.length;i++){
      if(this.product[i].productId===product_id){
        if(quantity!=5){
        this.product[i].quantity=parseInt(quantity)+1;
        }
      }
      this.grandTotal=this.cartService.getTotalPrice();
    }
  }



  dec(product_id:any,quantity:any){
    for(let i =0; i<this.product.length;i++){
      if(this.product[i].productId===product_id){
        if(quantity!=1){
        this.product[i].quantity=parseInt(quantity)-1;
        }
      }
      this.grandTotal=this.cartService.getTotalPrice();
    }
  }

// addToCart(product:IProduct){
//   const thecartitem=new  CartItem(product);
// this.cartService.addToCart(thecartitem)
// }

}


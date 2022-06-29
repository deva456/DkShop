import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

import { IProduct } from '../iproduct';


@Injectable({
  providedIn: 'root'
})
export class CartService {


  public cartItemList:IProduct[]=[]
  public productList=new BehaviorSubject<any>([]);

  public search =new BehaviorSubject<string>("");
  http: any;


  constructor(private toastr:ToastrService) { }

  getProducts(){
    return this.productList.asObservable();

  }
  setProducts(product :any){
    this.cartItemList.push(...product);
    this.productList.next(product);

  }


  addtoCart(product:any){

    const itemIndex = this.cartItemList.findIndex(item => item.productId === product.productId);
    if (itemIndex === -1) {
    this.cartItemList.push(product);

    this.toastr.success( `${product.title} Successfully added to cart` , `Awesome!`);
    }
    else {
      // this.toastr.warning( 'Check your cart' , `${product.title} already added!`,{
      //   timeOut:2500
      // });
      this.cartItemList[itemIndex].quantity = this.cartItemList[itemIndex].quantity + product.quantity;

    }
    this.productList.next(this.cartItemList.slice(0));
    this.getTotalPrice();
  }



  getTotalPrice():number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal += (a.price*a.quantity);
    })
    console.log(grandTotal)

    return grandTotal;
  }

  removeCartItem(product: IProduct){
      for(let i=0;i<this.cartItemList.length;i++){

      if(this.cartItemList[i].productId === product.productId){

      this.cartItemList.splice(i,1);

      }

    }
    this.toastr.error('item removed successfully!',`${product.title} Removed!`)
    this.productList.next(this.cartItemList);


  }
  removeAllCart(){
    this.cartItemList=[]
    this.productList.next(this.cartItemList);
  }



}

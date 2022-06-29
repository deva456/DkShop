import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WishListAPI } from '../wishlistAPI';

@Injectable({
  providedIn: 'root'
})
export class WishlistCartService {


  public wishlistCartItemList:WishListAPI[]=[]
  public productList=new BehaviorSubject<any>([]);

  public search =new BehaviorSubject<string>("");
  http: any;


  constructor() { }

  getProducts(){
    return this.productList.asObservable();

  }
  setProducts(product :any){
    this.wishlistCartItemList.push(...product);
    this.productList.next(product);
  }


  addToWishlistCart(product:any){

    const itemIndex = this.wishlistCartItemList.findIndex(item => item.productId === product.productId);
    if (itemIndex === -1) {
    this.wishlistCartItemList.push(product);
    // localStorage.setItem('cart',JSON.stringify(this.wishlistCartItemList))
    // console.log(localStorage.setItem('wishlistcart',JSON.stringify(this.wishlistCartItemList)))
    }
    this.productList.next(this.wishlistCartItemList.slice(0));

  }


  removeWishlistCartItem(product: WishListAPI){
      for(let i=0;i<this.wishlistCartItemList.length;i++){

      if(this.wishlistCartItemList[i].productId === product.productId){

      this.wishlistCartItemList.splice(i,1);

      }

    }
    // this.toastr.error('item removed successfully!',`${product.title} Removed!`)
    this.productList.next(this.wishlistCartItemList);

    // localStorage.setItem('wishlistcart',JSON.stringify(this.wishlistCartItemList))

  }
  removeAllCart(){
    this.wishlistCartItemList=[]
    this.productList.next(this.wishlistCartItemList);
  }

}

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../iproduct';


@Injectable({
  providedIn: 'root'
})
export class WishlistCartService {


  public wishlistCartItemList:IProduct[]=[]
  public productList=new BehaviorSubject<any>([]);

  public search =new BehaviorSubject<string>("");
  http: any;


  constructor(private toastr:ToastrService) { }

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
    }
    else{
         this.toastr.warning( 'Check your cart' , `${product.title} already added!`,{
         timeOut:2500
      });
    }
    this.productList.next(this.wishlistCartItemList.slice(0));

  }


  removeWishlistCartItem(product: IProduct){
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

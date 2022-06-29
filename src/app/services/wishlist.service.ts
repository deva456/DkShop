import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WishListAPI } from '../wishlistAPI';
import { IProduct } from '../iproduct';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  url="https://localhost:5001/api"
  constructor(private http:HttpClient) { }

  getData():Observable<WishListAPI[]>{
    return this.http.get<WishListAPI[]>(this.url+'/Wishlists');
  }

  getSingleProduct(productId: Number): Observable<WishListAPI> {
  return this.http.get<WishListAPI>(this.url + '/Wishlists' + productId);
  }


  addtoWishlist(product:IProduct,Image:IProduct,Title:IProduct,ShortDesc:IProduct,Price:IProduct){
    return this.http.post(this.url+ "/Wishlists", {productId:product,image:Image,title:Title,shortDesc:ShortDesc,price:Price})
      }


      removeWishlist(product:IProduct){

    return this.http.delete(this.url+ "/Wishlists/" + product)
      }
}

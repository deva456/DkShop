import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { IProduct } from '../iproduct';
import { Observable } from 'rxjs';
import { WishListAPI } from '../wishlistAPI';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   url="https://localhost:5001/api"



  constructor(private http:HttpClient) { }

  getData():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.url+'/Products');
  }

  getSingleProduct(productId: Number): Observable<IProduct[]> {
    console.log(productId)
  return this.http.get<IProduct[]>(this.url + '/Products' + productId);
  }

  // getProductsFromId(productId: number): Observable<IProduct[]> {
  //   return this.http.get<IProduct[]>(this.url + '/Products/' + productId);
  // }

  addProduct(val:IProduct){
    this.http.post<IProduct>(this.url+'/Products',val, {

      headers:{

        "Access-Control-Allow-Origin":"*"

      }

    }).subscribe(result => console.log("Data entered in Database Successfully !"));
  }

  UpdateProduct(val:any){
    console.log(val)
    return this.http.put(this.url+'/Products/'+val.productId,val)
  }

  updateBool(addedtowishlist1:any){
    console.log(addedtowishlist1)

    return this.http.put(this.url+'/Products/'+ addedtowishlist1.productId,addedtowishlist1)
  }


  deleteProduct(val:any){
    return this.http.delete(this.url+'/Products/'+val)
  }


  EditCart(val:any){
        return this.http.put(this.url+'/Products/'+val.productId,val)
      }

  }






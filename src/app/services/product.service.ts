import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { IProduct } from '../iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url!: string;


  constructor(private http:HttpClient) { }

  getData():Observable<IProduct[]>{

    let url="http://localhost:3000/user"
    return this.http.get<IProduct[]>(url);
  }

  getSingleProduct(product_id: Number): Observable<IProduct> {
  return this.http.get<IProduct>(this.url + 'products/' + product_id);
  }

  getProductsFromCategory(title: String): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url + 'products/category/' + title);
  }

  }






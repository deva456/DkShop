import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { IProduct } from '../iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getData():Observable<IProduct[]>{
    // getData():Observable<IResult>{
    let url="http://localhost:3000/user"
    return this.http.get<IProduct[]>(url);
    // return this.http.get<IResult>("http://localhost:3000/user");
    // return this.http.get(url);
  //   productData=[
  //     17,
  //     "HP",
  //     "https://m.media-amazon.com/images/I/71rmymgVWVL._AC_UY327_FMwebp_QL65_.jpg",
  //     "NA",
  //     "Newest 2022 HP laptop",
  //     49999,
  //     "1",
  //     "Newest 2022 HP laptop",
  //     3
  // ]

  }}

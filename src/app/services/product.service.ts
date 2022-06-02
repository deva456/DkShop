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

    let url="http://localhost:3000/user"
    return this.http.get<IProduct[]>(url);


  }}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { IProduct } from '../iproduct';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  products: IProduct[] = [];
  ServerURL = environment.SERVER_URL;

  constructor(private http: HttpClient) {
  }

  getSingleOrder(orderId: Number) {
    return this.http.get<IProduct[]>(`${this.ServerURL}orders/${orderId}`).toPromise();
  }
}


interface Iprodut{
  product_id: number;

    title: string;

    image: string;

    images:string;

    description:string;

    price: number;

    quantity: number;

    short_desc: string;

    categorie_id:number;
}


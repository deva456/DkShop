import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import{Router} from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
    SERVER_URL = environment.SERVER_URL;
  constructor(private http:HttpClient){}
  
    getAllProducts(){

    }
}

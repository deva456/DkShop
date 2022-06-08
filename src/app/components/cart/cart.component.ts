import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/app/iproduct';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public product:any=[];
  public grandTotal!:number;

  public totalItem: number=0;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.getProducts()
    .subscribe(res=>{
      this.product=res;
this.calculatePrice();
    })

    this.cartService.getProducts()
    .subscribe(res=>{
    this.totalItem = res.length;
  })

  }

  removeItem(item:IProduct){
    this.cartService.removeCartItem(item)
    this.calculatePrice();
      }

      calculatePrice(){

console.log(this.grandTotal)
        this.grandTotal=this.cartService.getTotalPrice();
        console.log(this.grandTotal)
      }








}


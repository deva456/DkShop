import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/app/iproduct';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public product:any=[];
  public grandTotal!:number;

  public totalItem: number=0;

  constructor(public cartService: CartService, private toastr:ToastrService) { }

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

  showDetailsMessage(){
    this.toastr.info('Please fill the necessary details','Kindly Note')
  }

      calculatePrice(){


        this.grandTotal=this.cartService.getTotalPrice();

      }








}


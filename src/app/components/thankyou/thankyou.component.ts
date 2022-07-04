import { Component, OnInit } from '@angular/core';
import { IBillingDetails } from 'src/app/billingDetails';
import { IProduct } from 'src/app/iproduct';
import { BillingDetailsService } from 'src/app/services/billing-details.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
bill:IBillingDetails[]=[];
public product:IProduct[]=[];
public grandTotal!:number;
dateObj= Date.now();
  constructor( private billingDetails:BillingDetailsService, private cartService:CartService) { }

  ngOnInit(): void {
    this.billingDetails.getBillingDetails().subscribe((data:IBillingDetails[])=>{
      console.log(data)
      this.bill=data;
      console.log(this.bill)
    })

    this.cartService.getProducts()
    .subscribe(res=>{
      this.product=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }

}

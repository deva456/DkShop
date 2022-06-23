import { Component, HostListener, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
declare var Razorpay:any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  public product:any=[];
  public grandTotal!:number;
  public totalItem: number=0;
public shopedmore:boolean=false;


  constructor(private cartService: CartService  ) { }

  ngOnInit(): void {

    this.cartService.getProducts()
    .subscribe(res=>{
      this.product=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
    this.cartService.getProducts()
    .subscribe(res=>{
    this.totalItem = res.length;
  })
  if(this.grandTotal>5000){
  this.shopedmore=true;

  }
}

//razorpay payment integration

message:any;
paymentId = "";
error = "";
title1 = 'razorpay-intergration';
options = {
  "key": "rzp_test_KMuAYKn5Hl8vDL",
  "amount": this.grandTotal,
  "name": "Devashish Kapadnis",
  "description": "Payment Details",
  "order_id": "",
  "handler": function (response: any) {
    var event = new CustomEvent("payment.success",
      {
        detail: response,
        bubbles: true,
        cancelable: true
      }
    );
    window.dispatchEvent(event);
  },
  "prefill": {
    "name": "",
    "email": "",
    "contact": ""
  },
  "notes": {
    "address": ""
  },
  "theme": {
    "color": "#3399cc"
  }
};


paynow() {
  this.paymentId = '';
  this.error = '';
  if(this.grandTotal<5000){
  this.options.amount = this.grandTotal*100+10000;
  }
  else{
    this.options.amount = this.grandTotal*100;
  }//paise
  this.options.prefill.name = "rishikesh";
  this.options.prefill.email = "rishikeshfirodiya38@gmail.com";
  this.options.prefill.contact = "7722084155";
  var rzp1 = new Razorpay(this.options);
  rzp1.open();
  rzp1.on('payment.failed', function (response: any) {
    //this.message = "Payment Failed";
    // Todo - store this information in the server
    console.log(response.error.code);
    console.log(response.error.description);
    console.log(response.error.source);
    console.log(response.error.step);
    console.log(response.error.reason);
    console.log(response.error.metadata.order_id);
    console.log(response.error.metadata.payment_id);
    //this.error = response.error.reason;
  }
  );
}
@HostListener('window:payment.success', ['$event'])
onPaymentSuccess(event: any): void {
  this.message = "Success Payment";
}



}








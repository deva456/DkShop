import { Component, OnInit } from '@angular/core';
import { IBillingDetails } from 'src/app/billingDetails';
import { BillingDetailsService } from 'src/app/services/billing-details.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
bill:IBillingDetails[]=[];
  constructor( private billingDetails:BillingDetailsService) { }

  ngOnInit(): void {
    this.billingDetails.getBillingDetails().subscribe((data:IBillingDetails[])=>{
      console.log(data)
      this.bill=data;
      console.log(this.bill)
    })
  }

}

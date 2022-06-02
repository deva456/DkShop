import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/app/iproduct';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-menscloths',
  templateUrl: './menscloths.component.html',
  styleUrls: ['./menscloths.component.css']
})
export class MensclothsComponent implements OnInit {

  result:IProduct[]=[];
  constructor(private order:ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.order.getData().subscribe((data:IProduct[]) =>{
          console.log(data);
          this.result = data;

          //for cart
          this.result.forEach((a:any)=>{
            Object.assign(a,{quantity:1,total:a.price})
          })

        });
      }


      addtocart(dt:any){
        this.cartService.addtoCart(dt);
      }



}

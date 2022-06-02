import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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




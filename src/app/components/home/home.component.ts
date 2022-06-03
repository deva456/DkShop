import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

searchkey:string='';

  result:IProduct[]=[];
  constructor(private order:ProductService, private cartService: CartService, private toast:ToastrService) { }

  ngOnInit(): void {
    this.order.getData().subscribe((data:IProduct[]) =>{
          console.log(data);
          this.result = data;

          //for cart
          this.result.forEach((a:any)=>{
            Object.assign(a,{quantity:1,total:a.price})
          })

        });
        // searchkey
        this.cartService.search.subscribe((val:any)=>{
          this.searchkey=val;


        })
      }


      addtocart(dt:any){
        this.cartService.addtoCart(dt);
        this.toast.success('message','item added to cart');
      }


    }




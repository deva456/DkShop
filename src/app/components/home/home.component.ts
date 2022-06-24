import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
p:any;
searchkey:string='';
public filtercategory : any;
isExistInCart:boolean = false;
public searchterm:string='';
public totalItem: number=0;

  result:IProduct[]=[];
  constructor(private order:ProductService, private cartService: CartService, private toastr:ToastrService)  { }


  ngOnInit(): void {
    this.order.getData().subscribe((data:IProduct[]) =>{

      this.cartService.getProducts()
      .subscribe(res=>{
      this.totalItem = res.length;
    })
          console.log(data);
          this.result = data;
          //for category

          this.filtercategory = data;

          //for cart
          this.result.forEach((a:any)=>{

            if(a.category === "fasion"){
              a.category = "Shirts for Mens"
            }
            else if(a.category === "girl fasion"){
              a.category = "Tops for Womens"
            }
            else if(a.category === "electronic"){
              a.category = "Laptops"
            }
            else if(a.category === "mobile"){
              a.category = "SmartPhones"
            }
            else{
              a.category = "Watches"
            }
            Object.assign(a,{quantity:1,total:(a.price*a.quantity)})
          });
          console.log(this.result);

        });

        // searchkey
        this.cartService.search.subscribe((val:any)=>{
          this.searchkey=val;

        })

      }
// showSuccessMessage(){

//   this.toastr.success( 'product successfully added to cart' , 'wohhoo!');
// }

      addtocart(dt:IProduct){

            this.cartService.addtoCart(dt);

        // this.cartService.addtoCart(dt);
        }


      filter(category : string){

        this.filtercategory = this.result
        .filter((a:any) =>{
          if(a.category == category || category == ''){
            return a;
          }
        })
      }
      search(event:any){
        this.searchterm=(event.target as HTMLInputElement).value;
        this.cartService.search.next(this.searchterm);
      }





// dec(result:any){
//   if(result.quantity!=1){
//     result.quantity-=1;
//     this.cartService.addtoCart(result);
//   }
// }


    }








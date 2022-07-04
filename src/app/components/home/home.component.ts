import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
// import { WishlistService } from 'src/app/services/wishlist.service';
import { WishListAPI } from 'src/app/wishlistAPI';
import { WishlistCartService } from 'src/app/services/wishlist-cart.service';



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
public totalItem1: number=0;
public totalItem: number=0;
wishlistArray:WishListAPI[]=[];
  result:IProduct[]=[];
  constructor(private order:ProductService, private cartService: CartService, private toastr:ToastrService,  private wishlistCartService:WishlistCartService)  { }


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

//         if(this.filtercategory.addedtocart===true){
// this.filtercategory.addedtowishlist=!this.filtercategory.addedtowishlist
//         }
            }


//added to cart
      addtocart(dt:IProduct){
        dt.addedtocart=true;

            this.cartService.addtoCart(dt);
        }

//filter category
      filter(category : string){
        this.filtercategory = this.result
        .filter((a:any) =>{
          if(a.category == category || category == ''){
            return a;
          }
        })
      }

      //search event for search bar
      search(event:any){
        this.searchterm=(event.target as HTMLInputElement).value;
        this.cartService.search.next(this.searchterm);
      }


//updating boolean column in database i.e(addedtowishlist)
updateBool(product:IProduct){
 product.addedtowishlist=!product.addedtowishlist;
 this.wishlistCartService.addToWishlistCart(product);
      this.order.updateBool(product).subscribe(()=>{
  product;
  console.log('addedtowishlist true');
      })
}
//updateing boolean colum in database i.e(addedtocartt)
updateCartBool(product:IProduct){
product.addedtocart=product.addedtocart;
this.order.EditCart(product).subscribe(()=>{
  product;
  console.log('cart Boolean change')
})
}
// remove cart item through button in mat-car and also updating boolean val in database
removeCartItem(product:IProduct){
  product.addedtocart=!product.addedtocart;
  this.order.EditCart(product).subscribe(()=>{
    product;
    console.log('cart Boolean change')
  })
  this.cartService.removeCartItem(product);
}
}















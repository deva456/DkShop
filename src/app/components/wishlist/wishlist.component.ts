import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/iproduct';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { WishlistCartService } from 'src/app/services/wishlist-cart.service';
// import { WishlistService } from 'src/app/services/wishlist.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  p:any;
  wishlistArray:IProduct[]=[];

  constructor( private product:ProductService, private cartService:CartService, private wishlistCartService:WishlistCartService) { }

  ngOnInit(): void {
    this.wishlistCartService.getProducts().subscribe((wishListData:IProduct[]) =>{
      console.log(wishListData);
      this.wishlistArray = wishListData;
    });


}

addToCart(dt:IProduct){
  dt.addedtocart=true;
      this.cartService.addtoCart(dt);
  }

  addToWishlistCart(dt:IProduct){
    this.wishlistCartService.addToWishlistCart(dt);
  }

removeCart(dt:IProduct){
  this.wishlistCartService.removeWishlistCartItem(dt)
}

updateBool(product:IProduct){
  product.addedtowishlist=!product.addedtowishlist;
       this.product.updateBool(product).subscribe(()=>{
   product;
   console.log('addedtowishlist true');
       })
 }

}

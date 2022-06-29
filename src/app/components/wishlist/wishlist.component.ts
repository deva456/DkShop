import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/iproduct';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { WishlistCartService } from 'src/app/services/wishlist-cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { WishListAPI } from 'src/app/wishlistAPI';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  p:any;
  wishlistArray:WishListAPI[]=[];
  result:IProduct[]=[];
  constructor(private wishlist:WishlistService, private product:ProductService, private cartService:CartService, private wishlistCartService:WishlistCartService) { }

  ngOnInit(): void {
    this.wishlist.getData().subscribe((wishListData:WishListAPI[]) =>{
      console.log(wishListData);
      this.wishlistArray = wishListData;
    });

    // iproduct array data
    this.product.getData().subscribe((data:IProduct[]) =>{
      this.cartService.getProducts()
      .subscribe(res=>{
    })
          console.log(data);
          this.result = data;

  });
}

addtocart(dt:IProduct){
  dt.addedtocart=true;
      this.cartService.addtoCart(dt);
  }

  addToWishlistCart(dt:WishListAPI){
    this.wishlistCartService.addToWishlistCart(dt);
  }

  // handleremovewishlist(product:any){
  //   for(let i=0;i<this.result.length;i++){
  //     if(this.result[i].productId=== product.productId){
  //       this.wishlist.removeWishlist(this.result[i].productId).subscribe(()=>{
  // product.addedtowishlist=false;
  // })
  //   }
  // }

  // }
}

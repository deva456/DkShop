import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { WishlistCartService } from 'src/app/services/wishlist-cart.service';
// import { WishlistService } from 'src/app/services/wishlist.service';
import { WishListAPI } from 'src/app/wishlistAPI';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem: number=0;
  public totalItem1: number=0;
  public searchterm:string='';
  wishlistArray: WishListAPI[]=[];
constructor(private cartService: CartService,private wishlistCartService:WishlistCartService) { }

ngOnInit(): void {
  this.cartService.getProducts()
  .subscribe(res=>{
  this.totalItem = res.length;
})

// this.wishlist.getProducts()
//   .subscribe(val=>{
//   this.totalItem1 = val.length;
// })


}


search(event:any){
this.searchterm=(event.target as HTMLInputElement).value;
this.cartService.search.next(this.searchterm);
}

loadno(){
  this.totalItem1=this.wishlistArray.length;
}

}


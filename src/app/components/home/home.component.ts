import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/iproduct';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result:IProduct[]=[];
  constructor(private order:ProductService) { }

  ngOnInit(): void {
    this.order.getData().subscribe((data:IProduct[]) =>{
          console.log(data);
          this.result = data;

        });
      }

    }




import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {


  constructor(private toast:ToastrService) { }

  ngOnInit(): void {

  }
  added(){
    this.toast.success("item added to cart");
  }

}

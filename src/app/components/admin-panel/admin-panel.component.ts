import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IProduct } from 'src/app/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  showAdd !: boolean;
  formValue !: FormGroup;
  productData !: any;
  // productModel : IProduct = new ();
  showUpdate !: boolean;
  constructor(private api :ProductService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    // this.formValue = this.formBuilder.group({
    //   id : [''],
    //   title : [''],
    //   image : [''],
    //   desc : [''],
    //   price : [''],
    //   quantity : [''],
    //   shortdesc : [''],
    //   category : [''],
    //   tags : ['']
    // })
    // this.getAllProducts();
  }

  clickAddProduct()
  {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postProductDetails(dt:any)
  {
   this.api.addProduct(dt);
  }

  getAllProducts()
  {
    this.api.getData()
    .subscribe(res=>{
       this.productData = res;
    })
  }

  deleteProduct(row : any)
  {
    this.api.deleteProduct(row.productId)
    .subscribe(res=>{
      alert("Product deleted");
      this.getAllProducts();
    })
  }

  onEdit(row : any)
  {

  }

  updateProduct()
  {

  }
}

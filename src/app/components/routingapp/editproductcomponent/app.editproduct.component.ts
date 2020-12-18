import { Categories, Manufacturers } from '../../../models/app.constants';
import { HttpService } from '../../../services/app.http.service';
import { ProductInfo } from '../../../models/app.productinfo.model';
import { Component, OnInit } from '@angular/core';

// ActivatedRoute: used for reading the route parameter
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editproduct-component',
  templateUrl: './app.editproduct.view.html'
})
export class EditProductComponent implements OnInit {
  categories = Categories;
  manufacturers =  Manufacturers;
  product:ProductInfo;
  // injecting Router class for event based navigation
  // injecting ActivatedRoute for subscribing to the parameter received from URL
  constructor(private serv: HttpService, private router: Router, private act:ActivatedRoute) {
    this.product = new ProductInfo(0, '', '', '', '', '', 0);
  }

  ngOnInit(): void {

    // subscribe to the route parameter received from URL
    this.act.params.subscribe((param)=> {
       this.product.ProductRowId =  param.id;
        // fetch product data from service
        this.serv.getProduct(this.product.ProductRowId).subscribe((response)=>{
            this.product = response;
        },(error)=>{
          console.log(`Error Occured ${error}`);
        });
    });
   }
  clear(): void {
    this.product = new ProductInfo(0, '', '', '', '', '', 0);
  }
  save(): void {
    this.serv.putProduct(this.product).subscribe((response)=>{
      this.product = response;
      this.router.navigate(['']); // navigate to ProductListComponent from Route table
    },(error)=>{
      console.log(`Error Occured ${error}`);
    });
  }
}

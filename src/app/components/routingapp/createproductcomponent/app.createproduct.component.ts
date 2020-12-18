import { Categories, Manufacturers } from './../../../models/app.constants';
import { HttpService } from './../../../services/app.http.service';
import { ProductInfo } from './../../../models/app.productinfo.model';
import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-createproduct-component',
  templateUrl: './app.createproduct.view.html'
})
export class CreateProductComponent implements OnInit {
  categories = Categories;
  manufacturers =  Manufacturers;
  product:ProductInfo;
  // injecting Router class for event based navigation
  constructor(private serv: HttpService, private router: Router) {
    this.product = new ProductInfo(0, '', '', '', '', '', 0);
  }

  ngOnInit(): void { }
  clear(): void {
    this.product = new ProductInfo(0, '', '', '', '', '', 0);
  }
  save(): void {
    this.serv.postProduct(this.product).subscribe((response)=>{
      this.product = response;
      this.router.navigate(['']); // navigate to ProductListComponent from Route table
    },(error)=>{
      console.log(`Error Occured ${error}`);
    });
  }
}

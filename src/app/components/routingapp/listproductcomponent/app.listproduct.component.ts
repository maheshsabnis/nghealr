import { HttpService } from './../../../services/app.http.service';
import { ProductInfo } from './../../../models/app.productinfo.model';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-listproduct-component',
  templateUrl: './app.listproduct.view.html'
})
export class ListProductComponent implements OnInit {
  products: Array<ProductInfo>;
  tableColumnHeaders: Array<string>;
  constructor(private serv: HttpService, private router: Router) {
    this.products = new Array<ProductInfo>();
    this.tableColumnHeaders = new Array<string>();
  }

  ngOnInit(): void {
    this.serv.getProducts().subscribe((response)=>{
      this.products = response;
      this.tableColumnHeaders = Object.keys(this.products[0]);
    },(error)=>{
      console.log(`Error Occured ${error}`);
    });
  }
  navigateToEdit(id: number):void {
    // navigate to edit Component with route parameter as 'id'
    this.router.navigate(['edit', id]);
  }
}

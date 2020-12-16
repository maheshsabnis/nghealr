import { Component, OnInit } from '@angular/core';
import {Categories,Manufacturers} from './../../models/app.constants';
import { Product } from "./../../models/app.product.model";
import {Logic} from './../../models/app.logic.model';
@Component({
  selector: 'app-dropdownutilizer-component',
  templateUrl: './app.dropdownutilizer.view.html'
})
export class DropDownUtilizerComponent implements OnInit {
  categories = Categories;
  manufacturers = Manufacturers;
  private logic: Logic;
  products: Array<Product>;
  emps:Array<any>;
  data:string;
  constructor() {
    this.products = new Array<Product>();
    this.logic  =new Logic();
    this.emps = new Array<any>();
    this.data = '';
   }

  ngOnInit(): void {
    this.products = this.logic.getProducts();
    this.emps.push({EmpNo:101,EmpName:'A',Salary:100});
    this.emps.push({EmpNo:102,EmpName:'B',Salary:200});
  }


  getRowValue(event): any {
    this.data = JSON.stringify(event);

  }

}

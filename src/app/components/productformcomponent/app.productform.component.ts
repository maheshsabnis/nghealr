import {Component, OnInit} from '@angular/core';
import {Categories, Manufacturers} from './../../models/app.constants';
import { Product } from './../../models/app.product.model';
import {Logic} from './../../models/app.logic.model';
@Component({
  selector: 'app-productform-component',
  templateUrl: './app.productform.view.html'
})
export class ProductFormComponent implements OnInit {
  // save constants in local public properties
  categories = Categories;
  manufactureres  = Manufacturers;
  // component level public objects
  product: Product;
  products: Array<Product>;
  private logic: Logic;
  tableHeaders: Array<string>;
  selectColor: string;
  constructor(){
    this.product = new Product('','','','','',0);
    this.logic = new Logic();
    this.products =  new Array<Product>();
    this.tableHeaders = new Array<string>();
    this.selectColor = '';
  }
   ngOnInit(): void {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
     // call the getProducts() method from Logic Class
     this.products = this.logic.getProducts();
     this.tableHeaders = Object.keys(this.products[0]);
   }

   clear():void {
      // redeclare the the product object
      // this will clear all UI elements bound with
      // properties of product object
       this.product = new Product('','','','','',0);
   }

   save(): void {
     this.products = this.logic.saveProduct(this.product);
   }

   getSelectedProduct(prd:Product):void {

     this.product  =  Object.assign({},prd);
   }


   chooseColor(event:any):void {
     this.selectColor = event.target.value;
   }

}

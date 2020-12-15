import {Component, OnInit} from '@angular/core';
import {Categories, Manufacturers} from './../../models/app.constants';
// importing FormGroup, FormControl for implementing Reactive Forms
// Validators validations
import {FormGroup, FormControl, Validators} from '@angular/forms';
// import the custom validator
import { CustomValidator } from "./app.custom.valifator";

import { Product } from './../../models/app.product.model';
import {Logic} from './../../models/app.logic.model';
@Component({
  selector: 'app-productreactiveform-component',
  templateUrl: './app.productreactiveform.view.html'
})
export class ProductReactiveFormComponent implements OnInit {
  // save constants in local public properties
  categories = Categories;
  manufactureres  = Manufacturers;
  // component level public objects
  product: Product;
  products: Array<Product>;
  private logic: Logic;
  tableHeaders: Array<string>;

  frmProduct: FormGroup;



  constructor(){
    this.product = new Product('','','','','',0);

    // the important step of binding the Model class properties (product)
    // with FormGroup, FormGroup class deribed from "AbstractControl" class

    // the constructor of FormGroup accepts
    // JSON object that represent Key:value pair
    // where key is the name of the property that will be bund with
    // UI elements using formContrleName attribute directive for databinding
    // this replaces [(ngModel)]
    // value is the AbstractControle, which is FormControl instance
    // that contains the Public property from the model class (state aka value of
    // the UI posted from UI) with
    // the Data Validation Rules (if any....)
    this.frmProduct = new FormGroup({
      ProductId: new FormControl(this.product.ProductId,
           Validators.compose([
              Validators.required, // this will directly accept an UI element reference
              Validators.minLength(2),
              Validators.maxLength(5),
              Validators.pattern('^[A-Za-z0-9]+$')
           ])),
      ProductName: new FormControl(this.product.ProductName),
      CategoryName: new FormControl(this.product.CategoryName),
      Manufacturer: new FormControl(this.product.Manufacturer),
      Description: new FormControl(this.product.Description),
      Price: new FormControl(this.product.Price,
        Validators.compose([
           Validators.required,
           Validators.minLength(2),
           Validators.maxLength(5),
           Validators.pattern('[0-9]+'),
           CustomValidator.checkEven // custom validator
        ]))
    });




    this.logic = new Logic();
    this.products =  new Array<Product>();
    this.tableHeaders = new Array<string>();
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
       // assign the blank product object to the frmProduct to clear all inputs and select elements
       this.frmProduct.setValue(this.product);
   }

   save(): void {
     // read posted vale for frmProduct formgroup from UI on submit button
     this.product = this.frmProduct.value;
     this.products = this.logic.saveProduct(this.product);
   }

   getSelectedProduct(prd:Product):void {
     this.frmProduct.setValue(prd);
     this.product  = this.frmProduct.value;
   }

}

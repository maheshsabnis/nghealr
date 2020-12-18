import { Product } from './../../models/app.product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-component',
  template: `
     <h2>The Angular Pipe Demos</h2>
     <div class="form-group">
       <strong>Uppercase Pipe for Name:--> {{name| uppercase}}</strong>
     </div>
     <div class="form-group">
       <strong>Uppercase Pipe for Name:--> {{name| lowercase}}</strong>
     </div>
     <div class="form-group">
       <strong>Currency Pipe for Salary:--> {{salary| currency}}</strong>
     </div>
     <div class="form-group">
       <strong>Currency with country symbol Pipe for Salary:--> {{salary| currency:'INR'}}</strong>
     </div>
     <div class="form-group">
       <strong>Currency with country symbol Pipe for Salary:--> {{salary| currency:'JPY'}}</strong>
     </div>
     <div class="form-group">
       <strong>Currency with country symbol Pipe for Salary:--> {{salary| currency:'USD'}}</strong>
     </div>
     <div class="form-group">
       <strong>Date Pipe for BirthDate:--> {{birtDate| date}}</strong>
     </div>
     <div class="form-group">
       <strong>Date Pipe for BirthDate:--> {{birtDate| date: 'fullDate'}}</strong>
     </div>
     <div class="form-group">
       <strong>Date Pipe for BirthDate:--> {{birtDate| date: 'shortDate'}}</strong>
     </div>
     <div class="form-group">
       <strong>Date Pipe for BirthDate:--> {{birtDate| date: 'longDate'}}</strong>
     </div>
     <div class="form-group">
       <strong>Date Pipe for BirthDate:--> {{birtDate| date: 'dd/MM/YYYY'}}</strong>
     </div>
     <div class="form-group">
       <strong>JSON Pipe for Class Object:--> {{product|json}}</strong>
     </div>

     <div class="form-group">
       <strong>Using Custom pipe:--> {{power|raisedTo:raisedToFactor}}</strong>
     </div>

     <div class="form-group">
       <strong>Using String Reverse  pipe:--> {{name| reverse}}</strong>
     </div>

  `
})
export class PipeComponent implements OnInit {
  salary: number;
  name: string;
  birtDate:Date;
  product:Product;
  power:number;
  raisedToFactor: number;
  constructor() {
    this.salary = 10000;
    this.name = "Mahesh Rameshrao Sabnis";
    this.birtDate = new Date(2020, 11, 18);
    this.product = new Product('Prd001','Laptop', 'Electronics', 'IBM', 'Gaming', 100000);
    this.power = 10;
    this.raisedToFactor = 4;
  }

  ngOnInit(): void { }
}

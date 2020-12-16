import { Component, OnInit } from '@angular/core';
import { HttpService } from "./../../services/app.http.service";
import { ProductInfo  } from "./../../models/app.productinfo.model";
@Component({
  selector: 'app-httpservice-component',
  templateUrl: './app.httpservice.view.html'
})
export class HttpServiceComponent implements OnInit {

  prd: ProductInfo;
  products: Array<ProductInfo>;
  message: string;
  // inject the service
  constructor(private serv: HttpService) {
    this.prd = new ProductInfo(0,'','','','','',0);
    this.products = new Array<ProductInfo>();
    this.message = '';
   }


   // if the componet wants to subscribe to service making
   // HTTP Calls (or any other aync operations)
   // then call the method fromm service on ngOnInit()
  ngOnInit(): void {
    this.loadData();
  }


  private loadData():void {
    // subscribe to the observable
    // and receive the response from observbale
    // either success or failed
    this.serv.getProducts().subscribe((response)=> {
      // success
      this.products = response;
      this.message = 'Call is Successful';
    },(error)=>{
      // fail
      this.message = `Called Failed ${error}`;
    });
  }

  getFunction(): void {
    this.loadData();
  }
  postFunction(): void {
    this.prd = new ProductInfo(0,'Prd9001','Tablet','Electronics',
    'IBM','Reader-Kindle',30000);

    this.serv.postProduct(this.prd).subscribe((response)=>{
      this.products.push(this.prd);
      this.message = 'Post Successful';
    },(error)=>{
      this.message = 'Post Failed';
    });
  }

  putFunction(): void {
    this.prd = new ProductInfo(3,'Prd9001','Tablet','Electronics',
    'IBM','Reader-Kindle-Ebook',30000);

    this.serv.putProduct(this.prd).subscribe((response)=>{
      this.message = `Put Successful ${JSON.stringify(response)}`;
      this.loadData(); // receive the data again
    },(error)=>{
      this.message = 'Post Failed';
    });
  }

  deleteFunction(): void {
    const id = 3;
    this.serv.deleteProduct(id).subscribe((response)=>{
      this.message = `Delete Successful ${JSON.stringify(response)}`;;
      this.loadData(); // receive the data again
    },(error)=>{
      this.message = 'Delete Failed';
    });
  }
}

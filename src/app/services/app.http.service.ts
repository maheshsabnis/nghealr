import { Injectable } from "@angular/core";

// HttpClient: for making http calls get/post/put/delete
// HttpHeaders: fpr passing headers in case of post and put calls
import {HttpClient, HttpHeaders} from '@angular/common/http';
// to save promise and response state
import {Observable} from 'rxjs';

import {ProductInfo} from  './../models/app.productinfo.model';

@Injectable({
  providedIn:'root'
})
export class HttpService {

  private url: string;

  // inject the HttpClient as constructor injection
  // this will be resolved by HttpClientModule
  constructor(private http: HttpClient){
    this.url = "https://apiapptrainingnewapp.azurewebsites.net//api/Products";
  }

  getProducts():Observable<ProductInfo[]> {
    let response:Observable<ProductInfo[]>;
                                           // REMOTE-URL addresss
    response = this.http.get<ProductInfo[]>(this.url);
    return response;
  }

  postProduct(prd: ProductInfo):Observable<ProductInfo> {
    let response:Observable<ProductInfo>;
    // define headers
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
                                          // URL, data in body, header-options
    response = this.http.post<ProductInfo>(this.url,prd,options)
    return response;
  }

  putProduct(prd: ProductInfo):Observable<ProductInfo> {
    let response:Observable<ProductInfo>;
    // define headers
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
                                          // URL, data in body, header-options
    response = this.http.put<ProductInfo>(`${this.url}/${prd.ProductRowId}`,prd,options)
    return response;
  }
  deleteProduct(id:number):Observable<ProductInfo> {
    let response:Observable<ProductInfo>;
    response = this.http.delete<ProductInfo>(`${this.url}/${id}`)
    return response;
  }

}

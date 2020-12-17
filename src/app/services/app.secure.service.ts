
import { RegisterUser, LoginUser, ResponseData, ProductResponse } from './../models/app.secutiry.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SecureService {
  private url:string;

  constructor(private http:HttpClient){
    this.url = 'http://localhost:5000';
  }
// register new user
  registerUser(user: RegisterUser):Observable<string> {
    let response: Observable<string>;
    const options={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    response = this.http.post<string>(`${this.url}/api/AuthService/RegisterNewUser`,user,options);
    return response;
  }

  // login user
  loginUser(user: LoginUser):Observable<ResponseData> {
    let response: Observable<ResponseData>;
    const options={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    response = this.http.post<ResponseData>(`${this.url}/api/AuthService/Login`,user,options);
    return response;
  }

  // get data by passing the token in request header
  getProducts(token:any):Observable<ProductResponse[]>{
    let response: Observable<ProductResponse[]>;
    const options={
      headers:new HttpHeaders({
        "AUTHORIZATION" : `Bearer ${token}`

      })
    };

    response = this.http.get<ProductResponse[]>(`${this.url}/api/ProductService`, options);
    return response;
  }


}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class MyHttpService {
  private url:string;
  constructor(private http: HttpClient) {
    this.url= "http://localhost:5000/api/Department";
  }

  getData():Observable<any[]> {
    let response:Observable<any[]>;
    response = this.http.get<any[]>(this.url);
    return response;
  }

}

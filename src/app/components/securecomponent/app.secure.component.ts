import { RegisterUser, ProductResponse, LoginUser } from './../../models/app.secutiry.models';
import { SecureService } from './../../services/app.secure.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-seure-component',
  templateUrl: './app.secure.view.html'
})
export class SecureComponent implements OnInit {
  message:string;
  data:Array<ProductResponse>;
  constructor(private serv:SecureService) {
    this.message = "";
    this.data = new Array<ProductResponse>();
  }

  ngOnInit(): void { }

  registerNewUser():void {
    let user = new RegisterUser();
    user.Email ="user5@msit.com";
    user.Password = "P@ssw0rd_";
    user.ConfirmPassword = "P@ssw0rd_";

    this.serv.registerUser(user).subscribe((response)=>{
      this.message = response;
    },(error)=>{
      this.message = `User registration Failed ${error}`;
    });
  }

  authUser():void {
    let user = new LoginUser();
    user.Email ="user5@msit.com";
    user.Password = "P@ssw0rd_";


    this.serv.loginUser(user).subscribe((response)=>{
      this.message = response.Message;
       // this method will respond the token
       // save this token sessionStorage of the browse
       sessionStorage.setItem('token', this.message);
    },(error)=>{
      this.message = `User Authentication Failed ${error}`;
    });
  }

  getData():void {
      // read token from the session storage and send it to the
      // SecureService
      const token = sessionStorage.getItem('token');
      this.serv.getProducts(token).subscribe((response)=>{
          this.data= response;
      },(error)=>{
        this.message = `Data Received Failed ${error}`;
      });
  }


}

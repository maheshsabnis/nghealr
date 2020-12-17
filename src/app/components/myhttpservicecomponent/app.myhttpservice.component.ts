import { Component, OnInit } from '@angular/core';
import { MyHttpService } from "./../../services/app.myheep.service";
@Component({
  selector: 'app-myhttpservice-component',
  templateUrl: './app.myservicehttp.view.html'
})
export class MyHttpServiceComponent implements OnInit {
  constructor(private serv:MyHttpService) { }

  ngOnInit(): void { }

  loadData():void {
    this.serv.getData().subscribe((resp)=>{
      console.log(`Receibed Response ${JSON.stringify(resp)}`);
    },(error)=>{
      console.log(`Error Occured ${error}`);
    });
  }
}

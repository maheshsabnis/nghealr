import {Component} from  '@angular/core';
// import the students array from constants

import {Students} from './../../models/app.constants';

@Component({
  selector:'app-demo-component',
  templateUrl:'./app.demo.view.html'
})
export class DemoComponent {
  selectedRecord:any;
  names:Array<string>;

  // store the Students constant in Component's property
  // so that we can bnd it to UI
  students = Students;

  tableColumnHeaders: Array<string>;

  toggle:boolean;
  message: string;

  constructor(){
    this.toggle = true;
    this.message = "I am the Message";
    this.names = new Array<string>();
    this.names.push("Sean Connary");
    this.names.push("George Luzbnaby");
    this.names.push("Roger Moore");
    this.names.push("Trimothy Dalton");
    this.names.push("Pierce Brosnon");
    this.names.push("Danial Craig");

    this.tableColumnHeaders = new Array<string>();

    // read Keys (aka proeprty-names) of the zeroth (0th)
    // record of students array and store it in column headers

    // will be used to generate column headers for
    // table in view
    this.tableColumnHeaders = Object.keys(this.students[0]);
    console.log(JSON.stringify(this.tableColumnHeaders));
  }

  showhide():void {
    if(!this.toggle) {
      this.toggle = true;
    }
    else {
      this.toggle = false;
    }
  }

  getSelectedRecord(record:any):void {
    this.selectedRecord = JSON.stringify(record);
  }
}

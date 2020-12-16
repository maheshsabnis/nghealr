import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-component',
  templateUrl: './app.dropdown.view.html'
})
export class DropDownComponent implements OnInit {

   private dataSource:Array<any>;

  constructor() {
    this.dataSource = new Array<any>();
  }

  // the @Input Decorated Property is used for Property Binding
  // [DataSource]
  // when the current component is used by the Parent COmponent

  @Input()
  set DataSource(val:Array<any>) {
    this.dataSource = val
  }

  get DataSource():Array<any> {
    return this.dataSource;
  }

  ngOnInit(): void { }
}

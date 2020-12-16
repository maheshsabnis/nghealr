import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-tablegrid-component',
    templateUrl: './app.tablegrid.view.html' 
})
export class TableGridComponent implements OnInit {
    private rowSource:Array<any>;
    columns:Array<string>;
    // define an event emitter property
    // the rowClicked is an event that will be emitted 
    // by child and parent has to subscribed to it
    // using EventBinding
    // (rowClicked)="fn1($event)", fn() is public method of parent
    // $event is data emitted from child to parent
    // EventEmitter<T> where T is datatype for data to be emitted
    @Output() rowClicked:EventEmitter<any>;

    constructor() { 
        this.rowSource = new Array<any>();
        // array for storing properties of object of RowSource 
        // for generating columns
        this.columns = new Array<string>();
        // instance of EventEmitter
        this.rowClicked = new EventEmitter<any>();
    }

    ngOnInit(): void { }

    @Input()
    set RowSource(val:Array<any>) {
        this.rowSource = val;
        // read properties of 0th record in rowSource
        this.columns = Object.keys(this.rowSource[0]);
    }

    get RowSource():Array<any>{
        return this.rowSource;
    }

    // define a method that will be bound with <table> row on HTML
    // this method will emit event

    onRowClicked(row:any): void {
        // emit the row
        this.rowClicked.emit(row);
        
    }

}

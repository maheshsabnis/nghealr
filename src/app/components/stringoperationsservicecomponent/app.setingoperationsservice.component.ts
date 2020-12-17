import { Component, OnInit } from '@angular/core';

// import the servoce to be injected

import {StringOperationsService} from './../../services/app.stringoperations.service';

@Component({
    selector: 'app-stringoperationsservice-component',
    templateUrl: './app.stringoperationsservice.view.html'
})
export class StringOperationsServiceComponent implements OnInit {

    private str:string;
    result: string;

    // inject the service in this component
    // using Constructor injection
    constructor(private serv:StringOperationsService) {
        this.str = "Angular Development with Service DEMO";
        this.result = '';

    }

    ngOnInit(): void {
        this.result = this.serv.reverse(this.str);
    }
}

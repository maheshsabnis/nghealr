import { Injectable } from "@angular/core";
// the angular service
// this must be registered in DI container of
// @NgModule in it providers:[] array
// to use this service in components, directives, etc
// inject this service using constructor injection
// providedIn:'root' will register the service at global
// DI container so that it can be available for DI 
// across all components / services / pipes of all internal 
// or external modules
@Injectable({
    providedIn: 'root'
})
export class StringOperationsService {
    reverse(str:string): string {
        let result:string= '';
        for(let i=str.length-1; i>=0;i--) {
            result+=str[i];
        }
        return result;
    }
}
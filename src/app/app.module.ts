import { EditProductComponent } from './components/routingapp/editproductcomponent/app.editproduct.component';
import { SinglePageComponent } from './components/routingapp/app.singlepage.component';
// BrowserModule: Loads the Module and its dependencies(?) in browser for exceution
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// importing HttpClientModule for Http Ajax operations
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {DemoComponent} from './components/democomponent/app.demo.component';
import {ProductFormComponent} from './components/productformcomponent/app.productform.component';
import {ProductReactiveFormComponent} from './components/productreactiveformcomponent/app.productreactiveform.component';
import { DropDownComponent } from './directives/componentdirective/app.dropdown.component';
import { DropDownUtilizerComponent } from './components/reusablecomponentutilizer/app.dropdownutilizer.component';
import {TableGridComponent} from './directives/tablegridcomponent/app.tablegrid.component';
import { StringOperationsServiceComponent } from "./components/stringoperationsservicecomponent/app.setingoperationsservice.component";
import { HttpServiceComponent } from "./components/httpservicecomponent/app.httpservice.component";

import { MyHttpServiceComponent } from "./components/myhttpservicecomponent/app.myhttpservice.component";
import {SecureComponent} from './components/securecomponent/app.secure.component';


// importing service
import {StringOperationsService} from './services/app.stringoperations.service';
import { PipeComponent } from './components/pipecomponent/app.pipe.component';

// importing custom pipes
import { RaisedToValuePipe,ReversePipe } from "./pipes/app.custom.pipe";

// importing custom directive
import { ColorDirective } from "./directives/colorattributedirective/app.color.directive";
import { CreateProductComponent } from './components/routingapp/createproductcomponent/app.createproduct.component';
import { ListProductComponent } from './components/routingapp/listproductcomponent/app.listproduct.component';


// dependencies of NgModule with its properties

// 1. imports: of the type array, that defines the list of Standard Angular moduels
// e.g. BrowserModule and
// any other custom modules e.g.AppRoutingModule
//  to be loaded for executing the current application


// 2. declarations: of the type array, used to define all components, directives, pipes
// in current application so that they will be instantiated and loaded in the browser

// 3. providers: of the type array. This provides a Dependency Injection Container
// for the current Angular application to register Anguar Services so that
// they can be injectedd in Components, Directives and Pipes, etc.

// 4. bootstrap: of the type array. This is used to decide, which component(s) from
// declarations array will be used for nrendering in browser.

@NgModule({
  declarations: [
    AppComponent, DemoComponent, ProductFormComponent,
    ProductReactiveFormComponent,DropDownComponent,
    DropDownUtilizerComponent, TableGridComponent,
    StringOperationsServiceComponent, HttpServiceComponent,
    MyHttpServiceComponent, SecureComponent, PipeComponent,
    RaisedToValuePipe, ReversePipe, ColorDirective,
    ListProductComponent, CreateProductComponent, SinglePageComponent,
    EditProductComponent
  ],
  // AppRoutingModule: is imported here this means that
  // the routetable created by this module
  // will be loaded as AppModule application root level
  // when the AppModule is loaded in browser, it will load route table
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule, HttpClientModule
  ],
  // register the service
 // providers: [StringOperationsService],
 providers:[],
  bootstrap: [SinglePageComponent]
})
export class AppModule { }

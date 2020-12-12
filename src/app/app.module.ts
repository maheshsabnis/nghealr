// BrowserModule: Loads the Module and its dependencies(?) in browser for exceution
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

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
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

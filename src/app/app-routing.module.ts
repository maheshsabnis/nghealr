import { EditProductComponent } from './components/routingapp/editproductcomponent/app.editproduct.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListProductComponent} from './components/routingapp/listproductcomponent/app.listproduct.component';
import { CreateProductComponent } from "./components/routingapp/createproductcomponent/app.createproduct.component";

// create the route table
const routes: Routes = [
  {path: '', component:ListProductComponent}, // default component
  {path:'create', component:CreateProductComponent},
  {path: 'edit/:id', component: EditProductComponent}, // parameterized routing
  {path: '**', redirectTo: ''} // go tho then default component if the URL does not match
];

// RouterModule.forRoot(routes): Register the RouteTable at the root of the application
// where the Current Module i.e. AppRoutingModule is imported

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

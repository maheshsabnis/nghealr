import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singlepage-component',
  template: `
  <div class="container">
  <h2>Single Page Application Using Angular Routing</h2>
    <table class="table table-bordered table-striped">
      <tbody>
        <tr>
        <td>
          <a [routerLink]="['']">List Products</a>
        </td>
        <td>
         <a [routerLink]="['create']">Create Products</a>
        </td>
        </tr>
      </tbody>
    </table>
    <hr/>
    <!--COmponents queries by [routerLink] will be rendered in router-outlet-->
    <router-outlet></router-outlet>
</div>
  `
})
export class SinglePageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}

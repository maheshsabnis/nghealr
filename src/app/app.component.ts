import { Component } from '@angular/core';


// Component class properties

// 1. selector: the custom HTML tag for the component. This custom tag will
// be used on index.html or html template for other component to load and render
// component

// 2.  templateUrl : the HTML file, that cotains UI of component
// this UI will be rendered in browser when the component is bootstraped

// 2a. template: the inline HTML defined in component file (not recommended)

// 3. style and styleUrls: property for defining inline CSS and  external CSS that
// contains UI styles for HTML eplate for the component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The App Component';

  message: string;
  url: string;
  name: string;

  constructor(){
      this.message = "The Angular Component";
      this.url = "https://www.dotnetcurry.com";
      this.name = '';
  }

  display(evt): void {
    // evt.target --> The button object
    // evt.target.value --> Value of the 'value' attribute of the button
    alert(`The Button is Clicked ${evt.target.value}`);
    this.message = "The Button is clicked";
  }

}

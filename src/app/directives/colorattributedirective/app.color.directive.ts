import { Directive, ElementRef, Renderer2, HostListener,Input } from '@angular/core';

// since the attribute directve is used for property binding
// the selector must use syntac for property binding as '[<SELECTOR-NAME>]'
// this selector will be applied on HTML element as custom attribute
// e.g. <tr [setColor]>


@Directive({
  selector: '[setColor]',
})
export class ColorDirective {

  // this will accept value for color to apply on HTML element
  // map the input decorated property to selector
  // so that the diretcive will be activated
  @Input('setColor')setColor:string;


  // inject Renderer2 and ElementRef in Constructor
  // this injection is resolved by BrowerModule class
  constructor(private element: ElementRef, private renderer: Renderer2){
    this.setColor = '';
  };

  // private method the contains logic for Custom Directive
  // applying a new background color on HTML element where
  // this custom directive is applied
  private applyColor(color:string): void {
     this.renderer.setStyle(this.element.nativeElement, "backgroundColor", color);
  }

  // public methods to host events to execute logic of custom directive

  // this method will be invoked on MouseEnter event
  // and execute the logic by applying new color on HTML element
  // on which this custom directive is applied
  @HostListener('mouseenter')
  onMouseEnter():void {
    // if not color then default ius magenta
    this.applyColor(this.setColor || 'magenta');
  }

  // this method will be invoked on MouseLeave event
  // and execute the logic by removing color of HTML element
  // on which this custom directive is applied
  @HostListener('mouseleave')
  onMouseLeave():void {
    this.applyColor('');
  }

}

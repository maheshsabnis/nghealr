import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'raisedTo'})
export class RaisedToValuePipe implements PipeTransform {
  transform(value: number, exponent: number): any {
      if(isNaN(exponent)) return 1;
      return Math.pow(value, exponent);
  }
}

@Pipe({name: 'reverse'})
export class ReversePipe implements PipeTransform {
  transform(value: string): any {
      let result:string = ''
      if(value.length > 0) {
         for(let i= value.length -1; i >=0; i-- ) {
           result+= value[i];
         }
      } else {
        result = 'Input string  is empty';
      }
      return result;
  }
}

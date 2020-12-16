// custom validator must be a class that contains static method
// this method will accept either premptive type or
// AbstractControl and returns a JSON obejct if value is invalid

import { AbstractControl } from "@angular/forms";
import {Logic} from './../../models/app.logic.model';
export class CustomValidator {
  static checkEven(ctrl: AbstractControl): any {

    // read value entered in abstract control
    // where this validation is applied
      const value = ctrl.value;
      // cehck for even
      if(parseInt(value) % 2 === 0) {
        return null; // value is valid
      } else {
        return  {odd:true}; // the JSON object the result expression
        // this 'odd' expression will be used on view to evaluate the
        // validation
      }
  }

  static checkExist(ctrl: AbstractControl): any {
       let logic:Logic = new Logic();
       let prds = logic.getProducts();

       let existsData = prds.filter((p,i)=> {
          return p.ProductId === ctrl.value;
       });

       if(existsData.length === 0) {
          return null; // record does not exist
       } else {
         return {exist:true}; // record already availbale
       }

  }
}

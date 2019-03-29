import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

export class CustomValidator {
  static custom_check_number(num_prefix : string) {
    return (control : AbstractControl) : { [key : string] : any} | null => {

      const number = control.value;
      console.log('number substr : ', number.substring(0, 4));
      if(number === '' || (number.substring(0, 4) === num_prefix)) {
        return null;
      }

      console.log('number errors : ', control.errors)
      return {'num_format' : true};
    }
  }
}

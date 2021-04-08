import { AbstractControl, ValidationErrors } from '@angular/forms';
import {
  helperCannotContainSpace,
  helperCompareDbData,
} from './common.validators';

export class PasswordValidators {
  static isIncorrectPassword(control: AbstractControl): any {
    return helperCompareDbData(control, '987', 'isIncorrectPassword');
  }

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    return helperCannotContainSpace(control);
  }
}

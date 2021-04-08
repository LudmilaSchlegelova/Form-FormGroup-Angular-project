import { AbstractControl, ValidationErrors } from '@angular/forms';
import {
  helperCannotContainSpace,
  helperCompareDbData,
} from './common.validators';

export class UserNameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    return helperCannotContainSpace(control);
  }

  static isIncorrectName(control: AbstractControl): any {
    return helperCompareDbData(control, 'Janko', 'isIncorrectName');
  }
}

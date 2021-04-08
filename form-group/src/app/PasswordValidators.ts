import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
  static isCorrectPassword(control: AbstractControl): any {
    let password = '98765';
    const result = new Promise((resolve) => {
      setTimeout(() => {
        if (control.value !== password) {
          resolve({ isCorrectPassword: true });
        } else {
          resolve({ isCorrectPassword: false });
        }
      }, 500);
    });

    return result;
  }
}

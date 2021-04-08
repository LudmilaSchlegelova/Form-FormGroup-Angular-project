import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';
import { UserNameValidators } from './userName.validators';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent {
  isLoading = false;

  form = new FormGroup({
    username: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
        UserNameValidators.cannotContainSpace,
      ],
      UserNameValidators.isIncorrectName
    ),
    password: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
        PasswordValidators.cannotContainSpace,
      ],
      PasswordValidators.isIncorrectPassword
    ),
  });
  // Vytvorili sme si premennu pre kratsi zapis vytahovania validacie a errors stavov pre username

  get username() {
    // console.log(this.form.get('username'));

    return this.form.get('username');
  }
  get password() {
    // console.log(this.form.get('password'));

    return this.form.get('password');
  }
  onSubmit() {
    this.isLoading = true;
    console.log(this.username);

    // if (
    //   this.username?.errors?.isIncorrectName &&
    //   this.password?.errors?.isIncorrectPassword
    // ) {
    //   this.isLoading = false;
    // }
  }
}

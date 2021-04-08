import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './PasswordValidators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl(
      '',
      Validators.required,
      PasswordValidators.isCorrectPassword
    ),
  });

  onFormSubmit() {
    console.log(this.myForm.get('name')?.value);
    console.log(this.myForm.get('password')?.value);
  }

  onReset() {
    // this.myForm.setValue({
    //   name: '',
    //   password: '',
    // });

    this.myForm.reset({ name: '', password: '' });
  }

  onPatch() {
    this.myForm.patchValue({ name: 'my string' });
  }

  get name() {
    return this.myForm.get('name');
  }
  get password() {
    return this.myForm.get('password');
  }
}

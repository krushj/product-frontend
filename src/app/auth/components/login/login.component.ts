
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  // configuration for snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  @Input()
  error!: any;

  @Input()
  token!: any;

  @Output()
  formSubmitEmitter = new EventEmitter<{username: string, password: string }>();


  constructor(private _snackBar: MatSnackBar) {}

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  submitForm(): void {
    if (this.form.invalid) {
      const message = this.username?.errors
        ? 'Username is required!'
        : 'Password is required!';
      const config = {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
          duration: 2000,
      };
      this._snackBar.open(message, undefined, config);
    } else {
      const username = this.username?.value as string;
      const password = this.password?.value as string;
      this.formSubmitEmitter.emit({username, password})
    }
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  resetForm(): void {
    this.form.setValue({ username: '', password: '' });
  }
  //kminchelle
  // 0lelplR
}

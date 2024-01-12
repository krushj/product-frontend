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
  styleUrls: ['./login.component.scss'], // Fix typo in styleUrls
})
export class LoginComponent {
  // configuration for snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  @Input()
  error!: string | null;

  @Output()
  formSubmitEmitter = new EventEmitter<{ username: string, password: string }>();

  constructor(private _snackBar: MatSnackBar) {}

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  submitForm(): void {
    if (this.form.invalid) {
      const message = this.form.get('username')?.errors
        ? 'Username is required!'
        : 'Password is required!';
      const config = {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 2000,
      };
      this._snackBar.open(message, undefined, config);
    } else {
      const username = this.form.get('username')?.value as string;
      const password = this.form.get('password')?.value as string;
      this.formSubmitEmitter.emit({ username, password });
    }
  }

  resetForm(): void {
    this.form.setValue({ username: '', password: '' });
  }
}

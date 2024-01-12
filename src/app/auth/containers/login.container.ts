import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTokenError } from '../selectors/token.selector';
import { getToken, loadToken } from '../actions/token.actions';

@Component({
  selector: 'login-container',
  template: `
    <app-login
      [error]="error$ | async"
      (formSubmitEmitter)="formSubmitted($event)"
    />
  `,
})
export class LoginContainerComponent implements OnInit {
  

  public error$: Observable<string>;

  formSubmitted($event : {username: string, password : string}){
    this.store$.dispatch(getToken({username: $event.username, password: $event.password}))
  }
  

  constructor(private store$: Store) {
    this.error$ = this.store$.select(selectTokenError);
  }

  ngOnInit() {
    this.store$.dispatch(loadToken())
  }
}

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TokenService } from '../services/token.service';
import * as tokenActions from '../actions/token.actions';
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn:'root'
})
export class TokenEffect {


  getToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(tokenActions.getToken),
      switchMap(({ username, password }) =>
        this.tokenService.getToken(username, password).pipe(
          map(({token}) => {
            this.tokenService.saveToken(token);
            this.router.navigate(['/product'])
            return tokenActions.getTokenSucess()}),
          catchError(() =>
            of(tokenActions.getTokenFailure({ error: 'Wrong credential' }))
          )
        )
      )
    );
  });


  loadToken$ = createEffect(() => this.actions$.pipe(
    ofType(tokenActions.loadToken),
    mergeMap(() => this.tokenService.loadToken()),
    map((tokenLoaded) => {
      if (tokenLoaded) 
        this.router.navigate(['/product']);
      return tokenActions.loadTokenSuccess();
    }),
    catchError((error) => of(tokenActions.loadTokenFailure({error : "Token not found"})))
  ));

  constructor(private actions$: Actions, private tokenService: TokenService, private router : Router) {}
}

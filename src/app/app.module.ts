import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { MaterialModule } from './material.module';
import { LayoutComponent } from './layout.component';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/components/login/login.component';
import { LoginContainerComponent } from './auth/containers/login.container';
import { HttpClientModule } from '@angular/common/http';
import { TokenReducer } from './auth/reducers/token.reducer';
import { TokenEffect } from './auth/effectors/token.effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LoginContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({token : TokenReducer, router: routerReducer}),
    EffectsModule.forRoot([TokenEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router', // The key to store the router state in the store
      //routerState: RouterState.Minimal, // Optional: You can choose a different router state serialization strategy
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

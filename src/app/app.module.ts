import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularMaterialModule } from './utils/material/material/material.module';
import { AuthorizationComponent } from './layouts/authorization/authorization.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AccountComponent } from './layouts/account/account.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

const APPLAYOUTS = [
  AuthorizationComponent,
  DefaultComponent,
  AccountComponent
];
@NgModule({
  declarations: [
    AppComponent,
    ...APPLAYOUTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

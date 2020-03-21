import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import {AngularMaterialModule} from '../../utils/material/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [SignInComponent, SignUpComponent, ForgotPasswordComponent, VerifyEmailComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [
  {path: '', redirectTo: 'sign-in'},
  { path: 'sign-in', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'verify-account', component: VerifyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

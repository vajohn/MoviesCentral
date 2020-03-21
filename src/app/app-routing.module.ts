import { AccountComponent } from './layouts/account/account.component';
import { AuthorizationComponent } from './layouts/authorization/authorization.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./views/landing/landing.module').then(m => m.LandingModule)
      },
    ]
  },
  {
    path: 'authorization',
    component: AuthorizationComponent,
    children: [
      {
        path: 'user',
        loadChildren: () => import('./views/authentication/authentication.module').then(m => m.AuthenticationModule)
      },
    ]
  },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/landing/landing.module').then(m => m.LandingModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

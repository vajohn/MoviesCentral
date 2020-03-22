import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WishListComponent} from './wish-list/wish-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'wish-list'
  },
  {
    path: 'wish-list',
    component: WishListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

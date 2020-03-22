import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { WishListComponent } from './wish-list/wish-list.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [WishListComponent],
    imports: [
        CommonModule,
        AccountRoutingModule,
        SharedModule
    ]
})
export class AccountModule { }

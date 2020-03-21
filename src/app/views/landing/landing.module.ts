import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import {SharedModule} from '../../shared/shared.module';
import {AngularMaterialModule} from '../../utils/material/material/material.module';


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    AngularMaterialModule
  ]
})
export class LandingModule { }

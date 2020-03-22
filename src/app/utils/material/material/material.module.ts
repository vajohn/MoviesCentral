import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatPaginatorModule
  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatPaginatorModule
  ]
})
export class AngularMaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import {AngularMaterialModule} from '../utils/material/material/material.module';



@NgModule({
  declarations: [MovieComponent, MovieDetailsComponent, MovieGridComponent],
  entryComponents: [MovieDetailsComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [MovieGridComponent]
})
export class SharedModule { }

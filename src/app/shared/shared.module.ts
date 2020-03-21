import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieGridComponent } from './movie-grid/movie-grid.component';



@NgModule({
  declarations: [MovieComponent, MovieDetailsComponent, MovieGridComponent],
  entryComponents: [MovieDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [MovieGridComponent]
})
export class SharedModule { }

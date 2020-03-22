import {Component, OnInit} from '@angular/core';
import {MovieListResponse} from '../../../models/movie';
import {moviesDefaultData} from '../../../utils/mock/movie';
import {MovieDatabaseService} from '../../../services/movies/moviedatabase.service';

@Component({
  selector: 'mc-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  currentPage = 1;
  requestedMovies: MovieListResponse = moviesDefaultData;

  constructor(
    private movieDatabaseService: MovieDatabaseService
  ) {
  }

  ngOnInit(): void {
    this.getMovies();
  }

  onPageSelected(agreed: number) {
    this.currentPage = agreed;
    console.log('change to ', this.currentPage);
  }

  private getMovies() {
    this.movieDatabaseService.getAllPopular().subscribe((result: MovieListResponse) =>
      this.requestedMovies = result
    );
  }
}

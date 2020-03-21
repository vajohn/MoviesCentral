import {Component, OnInit} from '@angular/core';
import {MovieListResponse} from '../../../models/movie';
import {moviesMockData} from '../../../utils/mock/movie';
import {MovieDatabaseService} from '../../../services/movies/moviedatabase.service';

@Component({
  selector: 'mc-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  currentPage = 1;
  requestedMovies: MovieListResponse;

  constructor(
    private movieDatabaseService: MovieDatabaseService
  ) {
  }

  ngOnInit(): void {
    this.getMovies();
  }

  onPageSelected(agreed: boolean) {
    agreed ? this.currentPage++ : this.currentPage--;
  }

  private getMovies() {
    this.requestedMovies = moviesMockData;
  }
}

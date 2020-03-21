import {Component, Input, OnInit} from '@angular/core';
import {MoviesResponse} from '../../models/movie';
import {environment} from '../../../environments/environment';
import {MatDialog} from '@angular/material/dialog';
import {MovieDetailsComponent} from '../movie-details/movie-details.component';
import {StorageService} from '../../services/firestore/storage.service';

@Component({
  selector: 'mc-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: MoviesResponse;
  environment = environment;

  constructor(public dialog: MatDialog, private storageService: StorageService) {
  }

  ngOnInit(): void {
  }

  openDetails(selectedMovie: MoviesResponse) {
    this.dialog.open(MovieDetailsComponent, {
      width: '700px',
      data: selectedMovie
    });
  }

  watchLater(movie: MoviesResponse) {

  }
}

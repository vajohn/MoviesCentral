import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieListResponse, MoviesResponse} from '../../models/movie';

@Component({
  selector: 'mc-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss']
})
export class MovieGridComponent implements OnInit {
  @Input() coreData: MoviesResponse[];
  @Input() movieData: MovieListResponse;
  @Output() next = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {

  }

  getPaginatorData(event) {
    console.log(event.pageIndex + 1);
    this.next.next(event.pageIndex + 1);
  }
}

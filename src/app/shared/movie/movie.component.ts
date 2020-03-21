import {Component, Input, OnInit} from '@angular/core';
import {MoviesResponse} from '../../models/movie';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'mc-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: MoviesResponse;
  environment = environment;

  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MoviesResponse} from '../../models/movie';
import {environment} from 'src/environments/environment';
import {genreMockData} from '../../utils/mock/movie';

@Component({
  selector: 'mc-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  environment = environment;

  constructor(
    public dialogRef: MatDialogRef<MovieDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MoviesResponse) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  findGenres(genreIds: number[]): string {
    const genres: string[] = [];

    genreIds.forEach((id, index) => {
      genreMockData.genres.forEach(genre => {
        if (genre.id === id) {
          genres.push(genre.name);
        }
      });
    });

    return genres.join(',');
  }
}

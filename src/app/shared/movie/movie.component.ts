import {Component, Input, OnInit} from '@angular/core';
import {MoviesResponse} from '../../models/movie';
import {environment} from '../../../environments/environment';
import {MatDialog} from '@angular/material/dialog';
import {MovieDetailsComponent} from '../movie-details/movie-details.component';
import {StorageService} from '../../services/firestore/storage.service';
import {AuthService} from '../../services/auth/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'mc-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: MoviesResponse;
  environment = environment;

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private router: Router,
    private storageService: StorageService,
    private authService: AuthService) {
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
    if (this.authService.userData !== undefined) {
      this.storageService.getWishList().subscribe((response: MoviesResponse[]) => {
        if (response.some(data => data.id === movie.id)) {
          this.snackBar.open(`${movie.title} already in watch later list`, 'Dismiss', {
            duration: 2000
          });
        } else {
          this.storageService.createWishList(movie).then(() => this.snackBar
            .open(`${movie.title} added to watch later list`, 'Dismiss', {
              duration: 2000
            }));
        }
      });
    }
    if (this.authService.userData === undefined) {
      this.snackBar.open('Please ', 'Sign In', {
        duration: 6000
      });

      this.snackBar._openedSnackBarRef.onAction().subscribe(() => this.router.navigateByUrl('/authorization/user/sign-in'));
    }
  }

  watchRemoveLater(movie: MoviesResponse) {

    if (this.authService.userData !== undefined) {
      this.storageService.getWishList().subscribe((response: MoviesResponse[]) => {
        if (response.some(data => data.id === movie.id)) {
          this.storageService.deleteWishList(movie.firebaseId).then(() => this.snackBar
            .open(`${movie.title} deleted from watch later list`, 'Dismiss', {
              duration: 2000
            }));
        }
      });
    }
    if (this.authService.userData === undefined) {
      this.snackBar.open('Please ', 'Sign In', {
        duration: 6000
      });

      this.snackBar._openedSnackBarRef.onAction().subscribe(() => this.router.navigateByUrl('/authorization/user/sign-in'));
    }
  }
}

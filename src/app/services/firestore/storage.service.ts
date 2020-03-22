import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from '../auth/auth.service';
import {MoviesResponse} from '../../models/movie';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private firestore: AngularFirestore, private authService: AuthService) {
  }

  getWishList() {
    return this.firestore.collection(this.authService.currentUserValue.uid)
      .snapshotChanges()
      .pipe(
        map(response => {
          return response.map(e => e.payload.doc.data()) as MoviesResponse[];
        }),
        catchError(err => err)
      );
  }

  createWishList(movie: MoviesResponse) {
    return this.firestore.collection(this.authService.currentUserValue.uid).add(movie);
  }

  updateWishList(movie: MoviesResponse) {
    delete movie.id;
    return this.firestore.doc(this.authService.currentUserValue.uid + '/' + movie.id).update(movie);
  }

  deleteWishList(movieId: string) {
    return this.firestore.doc(this.authService.currentUserValue.uid + '/'  + movieId).delete();
  }
}

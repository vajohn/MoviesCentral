import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MovieListResponse} from '../../models/movie';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieDatabaseService {

  constructor(private http: HttpClient) {
  }

  getAllPopular(pages = 1) {
    const param = {api_key: environment.apiKey, page: pages.toString()};
    return this.http.get<MovieListResponse>(`${environment.baseUrl}movie/popular`, {params: param})
      .pipe(
        map(result => result),
        catchError(err => err)
      );
  }

  getAllSearched(pages = 1, searchValue: string) {
    const param = {api_key: environment.apiKey, page: pages.toString(), query: searchValue};
    return this.http.get<MovieListResponse>(`${environment.baseUrl}movie/popular`, {params: param})
      .pipe(
        map(result => result),
        catchError(err => err)
      );
  }
}

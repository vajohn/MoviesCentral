import { Injectable } from '@angular/core';
import {LoaderBarService} from '../loader/loader-bar.service';
import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DefaultInterceptor implements DefaultInterceptor {

  constructor(private loaderBarService: LoaderBarService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderBarService.show();
    return next.handle(request)
      .pipe(
        catchError(err => {
          return throwError(err);
        }),
        finalize(() => this.loaderBarService.hide())
      );
  }
}

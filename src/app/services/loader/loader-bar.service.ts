import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderBarService {
  loading = false;

  constructor() {
  }

  show() {
    this.loading = true;
  }

  hide() {
    this.loading = false;
  }
}

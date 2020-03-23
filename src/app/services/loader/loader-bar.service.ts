import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderBarService {
  loading = false;
  private loadTracker = new BehaviorSubject<boolean>(this.loading);

  constructor() {
  }

  show() {
  this.loadTracker.next(true);
  }

  hide() {
    this.loadTracker.next(this.loading);
  }

  getLoading(): boolean {
    return this.loadTracker.value;
  }
}

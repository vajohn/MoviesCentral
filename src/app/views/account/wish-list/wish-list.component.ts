import {Component, OnInit} from '@angular/core';
import {MoviesResponse} from '../../../models/movie';
import {moviesDefaultData} from '../../../utils/mock/movie';
import {StorageService} from '../../../services/firestore/storage.service';

@Component({
  selector: 'mc-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  requestedMovies = moviesDefaultData.results;

  constructor(private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.getWishList();
  }

  private getWishList() {
    this.storageService.getWishList().subscribe(response => this.requestedMovies = response as MoviesResponse[]);
  }
}

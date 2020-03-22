import {Component, OnInit} from '@angular/core';
import {MovieListResponse} from '../../../models/movie';
import {moviesDefaultData} from '../../../utils/mock/movie';
import {MovieDatabaseService} from '../../../services/movies/moviedatabase.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'mc-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  currentPage = 1;
  requestedMovies: MovieListResponse = moviesDefaultData;
  searchForm: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private movieDatabaseService: MovieDatabaseService,
  ) {
  }

  ngOnInit(): void {
    this.getMovies();
    this.initiateForm();
    this.initiateEnterTextSearch();
  }

  get form() {
    return this.searchForm.controls;
  }

  onPageSelected(agreed: number) {
    this.currentPage = agreed;
    this.movieDatabaseService.getAllPopular(this.currentPage).subscribe((result: MovieListResponse) =>
      this.requestedMovies = result
    );
  }

  private getMovies() {
    this.movieDatabaseService.getAllPopular().subscribe((result: MovieListResponse) =>
      this.requestedMovies = result
    );
  }

  private initiateForm() {
    this.searchForm = this.formBuilder.group({
      searchTerm: ['', [Validators.required]],
    });
  }

  search() {
    this.submitted = true;

    if (this.searchForm.invalid) {
      return;
    }

    this.movieDatabaseService.getAllSearched(this.form.searchTerm.value).subscribe((result: MovieListResponse) =>
      this.requestedMovies = result
    );
  }

  private initiateEnterTextSearch() {
    this.form.searchTerm.valueChanges
      .subscribe(data => this.movieDatabaseService.getAllSearched(data).subscribe((result: MovieListResponse) =>
      this.requestedMovies = result
    ));
  }
}

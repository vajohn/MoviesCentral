import {Component, OnInit} from '@angular/core';
import {LoaderBarService} from '../../services/loader/loader-bar.service';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'mc-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  isLoading: boolean;

  constructor(public loader: LoaderBarService, public authService: AuthService) {
  }

  ngOnInit(): void {
    this.isLoading = this.loader.getLoading();
  }

}

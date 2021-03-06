import { Component, OnInit } from '@angular/core';
import {LoaderBarService} from '../../services/loader/loader-bar.service';

@Component({
  selector: 'mc-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  isLoading: boolean;

  constructor(public loader: LoaderBarService) { }

  ngOnInit(): void {
    this.isLoading = this.loader.getLoading();

  }

}

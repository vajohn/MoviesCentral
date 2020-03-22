import { Component, OnInit } from '@angular/core';
import {LoaderBarService} from '../../services/loader/loader-bar.service';

@Component({
  selector: 'mc-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(public loader: LoaderBarService) { }

  ngOnInit(): void {
  }

}

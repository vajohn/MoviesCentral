import { Component } from '@angular/core';

@Component({
  selector: 'mc-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MoviesCentral';
}

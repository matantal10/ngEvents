import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `,
  styleUrls: ['./event-app.component.scss']
})
export class EventAppComponent {
  title = 'ng-fund';
}

import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template: `
    <nav-bar></nav-bar>
    <side-bar-toggle [sideBar]="sideBar"></side-bar-toggle>
    <side-bar #sideBar></side-bar>
    <router-outlet></router-outlet>
    `
})
export class EventAppComponent {
  title = 'ng-fund';
}

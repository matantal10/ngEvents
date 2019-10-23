import {Component, OnInit} from '@angular/core';
import {AuthService} from './user/auth.service';

@Component({
  selector: 'event-app',
  template: `
    <nav-bar></nav-bar>
    <side-bar-toggle [sideBar]="sideBar"></side-bar-toggle>
    <side-bar #sideBar></side-bar>
    <router-outlet></router-outlet>
    `
})
export class EventAppComponent implements OnInit {

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}

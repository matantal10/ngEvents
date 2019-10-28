import {Component, OnDestroy, OnInit} from '@angular/core';
import { AuthService } from '../user/auth.service';
import {EventService} from '../shared/event.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  public sessionTerm = '';
  public foundSessions: [];
  public events;
  public subscription = new Subscription();

  constructor(private authService: AuthService, private eventService: EventService) { }

  ngOnInit() {
    this.subscription = this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  searchSessions(seesionTerm: any) {
    this.eventService.searchSessions(seesionTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

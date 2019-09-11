import {Component, OnInit} from '@angular/core';
import { AuthService } from '../user/auth.service';
import {EventService} from '../shared/event.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public sessionTerm = '';
  public foundSessions: [];

  constructor(private authService: AuthService, private eventService: EventService) { }

  ngOnInit() {
  }

  searchSessions(seesionTerm: any) {
    this.eventService.searchSessions(seesionTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }
}

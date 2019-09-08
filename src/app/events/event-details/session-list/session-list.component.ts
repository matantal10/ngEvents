import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {

  constructor() { }

  @Input() sessions: any;
  @Input() fliterBy: any;

  public visibleSessions: [];

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.fliterBy);
    }
  }

  filterSessions(filter) {
    if (filter.toLowerCase() === 'all') {
      // a copy of the sessions array
      this.visibleSessions = this.sessions.slice();
    } else {
      this.visibleSessions = this.sessions.filter(session => session.level.toLowerCase() === filter.toLowerCase());
    }
  }

}

import {Component, Input, OnChanges, OnInit } from '@angular/core';
import { VoterService } from '../../../shared/voter.service';
import { AuthService } from '../../../user/auth.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {

  constructor(private voterService: VoterService, private authService: AuthService) {
  }

  @Input() sessions: any;
  @Input() filterBy: any;
  @Input() sortBy: any;

  public visibleSessions: [];

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(this.sortByNameAsc) : this.visibleSessions.sort(this.sortByVotesDec);
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

  sortByNameAsc(s1, s2) {
    if (s1.name.toLowerCase() > s2.name.toLowerCase()) {
      return 1;
    } else if (s1.name.toLowerCase() === s2.name.toLowerCase()) {
      return 0;
    } else {
      return -1;
    }
  }

 sortByVotesDec(s1, s2) {
    return s2.voters.length - s1.voters.length;
  }

  toggleVote(session) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.authService.currentUser.userName);
      if (this.sortBy === 'votes') {
        this.visibleSessions.sort(this.sortByVotesDec);
      }
    } else {
      this.voterService.addVoter(session, this.authService.currentUser.userName);
      if (this.sortBy === 'votes') {
        this.visibleSessions.sort(this.sortByVotesDec);
      }
    }
  }

  userHasVoted(session) {
    return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
  }
}






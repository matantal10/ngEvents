import { Injectable } from '@angular/core';

@Injectable()
export class VoterService {

  deleteVoter(session, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  addVoter(session, voterName: string) {
    session.voters.push(voterName);
  }

  userHasVoted(session, voterName: string) {
    // some return boolean, return true if voterName exists, keeps scanning till it finds true or false.
    return session.voters.some(voter => voter === voterName);
  }
}

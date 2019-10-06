import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class VoterService {

  constructor(private http: HttpClient) {}

  deleteVoter(eventId: number, session, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);

    const url = `api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.delete(url)
      .pipe(catchError(this.handleError('deleteVoter')))
      .subscribe();
  }

  addVoter(eventId: number, session, voterName: string) {
    session.voters.push(voterName);

    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    const url = `api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.post(url, {}, options)
      .pipe(catchError(this.handleError('addVoter')))
      .subscribe();
  }

  userHasVoted(session, voterName: string) {
    // some return boolean, return true if voterName exists, keeps scanning till it finds true or false.
    return session.voters.some(voter => voter === voterName);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (errorMessage: any): Observable<T> => {
      console.error('Error Message', errorMessage);
      return of(result as T);
    };
  }
}

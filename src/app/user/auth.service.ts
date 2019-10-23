import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class AuthService {

    public currentUser;

    constructor(private http: HttpClient) {}

    loginUser(userName: string, password: string) {

        let loginInfo = {
          username: userName,
          password: password
        };

        const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
        const url = '/api/login';
        return this.http.post(url, loginInfo, options)
          .pipe(tap(data => {
          this.currentUser = data['user'];
        }))
          .pipe(catchError(err => {
            return of(false);
          }));
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

  checkAuthenticationStatus() {
    const url = '/api/currentIdentity';
    this.http.get(url).pipe(tap(data => {
      if (data instanceof Object) {
        this.currentUser = data;
        console.log(`${this.currentUser.firstName} is now logged on`);
      } else {
        console.log('Please login');
      }})).subscribe();
  }

    updateCurrentUser(firstName, lastName) {
      this.currentUser.firstName = firstName;
      this.currentUser.lastName = lastName;
      const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
      return this.http.put(`api/users/${this.currentUser.id}`, this.currentUser, options);
    }

    logout() {
      this.currentUser = undefined;

      const url = '/api/logout';
      const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
      return this.http.post(url, {}, options);
    }
}

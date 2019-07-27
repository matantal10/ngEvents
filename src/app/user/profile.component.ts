import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  formProfile: FormGroup;
  firstName;
  lastName
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName);
    this.lastName = new FormControl(this.authService.currentUser.lastName);
    
    this.formProfile = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formProfile) {
    this.authService.updateCurrentUser(formProfile.firstName, formProfile.lastName);
    this.router.navigate(['events']);
  }

}

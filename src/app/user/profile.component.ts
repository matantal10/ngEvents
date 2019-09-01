import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  formProfile: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  mouseOverSave;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, Validators.required);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.formProfile = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formProfile) {
    if (this.formProfile.valid ) {
      this.authService.updateCurrentUser(formProfile.firstName, formProfile.lastName);
      this.router.navigate(['events']);
    }
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }
  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

}

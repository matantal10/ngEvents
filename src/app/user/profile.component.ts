import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';
import {Toastr, TOASTR_TOKEN} from '../shared/toastr.service';
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  formProfile: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(private authService: AuthService, private router: Router, @Inject(TOASTR_TOKEN)private toaster: Toastr) { }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
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
      this.authService.updateCurrentUser(formProfile.firstName, formProfile.lastName).subscribe(() => {
        this.toaster.info('profile saved!', 'Hello ' + `${this.firstName.value}`);
      });
    }
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }
  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['user/login']);
    });
  }
}

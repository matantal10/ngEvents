import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styles: [`
       em {
           color: red;
           float: right;
           padding: 5px;
       }
  `]
})
export class LoginComponent implements OnInit {

    public userName;
    public password;
    public mouseOverLogin;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(formValues) {
      console.log(formValues);
      this.authService.loginUser(formValues.userName, formValues.password);
      this.router.navigate(['/events']);
  }

  cancel() {
      this.router.navigate(['/events']);
  }

}

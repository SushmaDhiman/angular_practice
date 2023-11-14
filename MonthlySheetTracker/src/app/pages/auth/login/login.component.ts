import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _commonService: CommonService) {}
  applicationTitle: string = this._commonService.applicationTitle;
  loginButton: string = 'Login';
  loginLabels = {
    email: 'Email',
    password: 'Password',
    remember: 'Remember me',
  };
  
email!: string;
password!: number;
  setValue() {
    console.log(this.email, this.password);
  }
}

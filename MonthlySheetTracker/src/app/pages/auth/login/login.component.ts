import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  {
 // constructor(private _commonService: CommonService) {}
  // demo: boolean = this._commonService.test;
  // enroll() {
  //   this._commonService.test = false;
  //   this.demo = this._commonService.test;
  // }
  constructor(private _commonService: CommonService) {}
  title: string = this._commonService.applicationTitle;
loginLabels = {
    email: 'Email',
    password: 'Password',
    remember: 'Remember me',
  };
}

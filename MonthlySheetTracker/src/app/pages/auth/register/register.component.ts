import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _commonService: CommonService) {}
  title: string = this._commonService.applicationTitle;
  registerLabels = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  profession: 'Profession',
  mobileNumber: 'Mobile Number',
  password: 'Passward',
  confirmPassword: 'Confirm Password',
  };
}

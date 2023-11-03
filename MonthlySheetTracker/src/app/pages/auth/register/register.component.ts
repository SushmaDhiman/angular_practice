import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private _commonService: CommonService) {}
  applicationTitle: string = this._commonService.applicationTitle;
  registerButton: string = 'Register';
  registerLabels = {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    profession: 'Profession',
    professionSelect: {
      selectProfession: 'Select Profession',
      backendDeveloper: 'Backend Developer',
      frontendDeveloper: 'Frontend Developer',
      qaDeveloper: 'QA Developer',
      bdeDeveloper: 'BDE Developer',
},
    mobileNumber: 'Mobile Number',
    password: 'Passward',
    confirmPassword: 'Confirm Password',
  };
}

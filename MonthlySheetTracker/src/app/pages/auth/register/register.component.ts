import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import{FormGroup, FormControl,FormBuilder,NgForm,Validator, Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
user: any;
  constructor(private _commonService: CommonService,formbuilder:FormBuilder) {}
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
  registerForm = new FormGroup({
    firstName:new FormControl('',[Validators.required,Validators.minLength(6)]),
    lastName:new FormControl(''),
    email:new FormControl('',[Validators.required,Validators.email]),
    mobileNumber:new FormControl(''),
    passward:new FormControl(''),
    confirmPassward:new FormControl(''),
  });
  submitRegister(){
    console.log(this.registerForm)

    this._commonService.postData(this.registerForm.value).subscribe(data=>{
      console.log(data);
    })
  }


get email()
{
return this.registerForm.get('email');
}
get firstName()
{
return this.registerForm.get('firstName');
}
}

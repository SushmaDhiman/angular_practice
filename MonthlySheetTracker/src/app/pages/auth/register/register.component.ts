import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  requiredContent: string = 'This field is required.';
  registerForm: FormGroup;  
  constructor(private _commonService: CommonService, public fb: FormBuilder,private snackBar: MatSnackBar) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      profession: [this.registerLabels.professionSelect.selectProfession],
      mobileNumber: ['', [Validators.required,Validators.pattern('.{10,10}')]],
      password: ['', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      confirmPassword: ['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
    });
    console.log(this._commonService.getDataID);
  }
  get firstName() {
    return this.registerForm.get('firstName')
  }
  get email() {
    return this.registerForm.get('email')
  }
  get lastName() {
    return this.registerForm.get('lastName')
  }
  get mobileNumber() {
    return this.registerForm.get('mobileNumber')
  }
  get password() {
    return this.registerForm.get('password')
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword')
  }
  
  applicationTitle: string = this._commonService.applicationTitle;
  registerButton: string = 'Register';
  registerLabels = {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    profession: 'Profession',
    professionSelect: {
      selectProfession: 'Data analysis',
      backendDeveloper: 'Backend Developer',
      frontendDeveloper: 'Frontend Developer',
      qaDeveloper: 'QA Developer',
      bdeDeveloper: 'BDE Developer',
    },
    mobileNumber: 'Mobile Number',
    password: 'Password',
    confirmPassword: 'Confirm Password',
  };
  
  submitForm() {
    if (this.registerForm.valid) {
      this._commonService.registerUserData(this.registerForm.value).subscribe(data => {
      })
      
    }
  }
 
  isValid: boolean = false
  isValidate() {
    if (this.firstName?.invalid && this.lastName?.invalid && this.email?.invalid && this.mobileNumber?.invalid && this.password?.invalid && this.confirmPassword?.invalid) {
      this.isValid = true;
      this._commonService.snackBarMessage = "Data registered SuccessFully";
    }
     console.log(this._commonService.snackBarMessage);
  }


  inputTypePass: string = "password";
  inputType: string = "password";
  isShow: boolean = false;
  isShowPass: boolean = false;
  isHidePass: boolean = true;
  isHide: boolean = true;
  showPass(){
    this.isShowPass = !this.isShowPass;
    this.isHidePass = !this.isShowPass;
  this.inputTypePass = "password";
  }
  hidePass(){
    this.isHidePass = !this.isHidePass;
    this.isShowPass = !this.isHidePass;
  this.inputTypePass = "text";
  }
  show(){
    this.isShow = !this.isShow;
    this.isHide = !this.isShow;
  this.inputType = "password";
  }
  hide(){
    this.isHide = !this.isHide;
    this.isShow = !this.isHide;
  this.inputType = "text";

  }

}

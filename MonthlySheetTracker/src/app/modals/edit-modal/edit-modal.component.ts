import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent {
  requiredContent: string = 'This field is required.';
  registerForm: FormGroup;
  getID: any = this._commonService.getDataID? this._commonService.getDataID : "1";
  editGetData : any;
  constructor(private _commonService: CommonService, public fb: FormBuilder) {
    this.getRegisterData()
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      profession: [this.registerLabels.professionSelect.selectProfession],
      mobileNumber: ['', [Validators.required,Validators.pattern('.{10,10}')]],
      password: ['', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      confirmPassword: ['',[Validators.required]],
    });
  }
    
  
  getRegisterData() {
    this._commonService.getRegisterData().subscribe(data => {
      this.registerForm.patchValue({
       firstName : data[this.getID-1].firstName,
       lastName : data[this.getID-1].lastName,
       email : data[this.getID-1].email,
       profession : data[this.getID-1].profession,
       mobileNumber : data[this.getID-1].mobileNumber,
       password : data[this.getID-1].password,
       confirmPassword : data[this.getID-1].confirmPassword,
      })
    })
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
  updateRegister(){
    if (this.registerForm.valid) {
      this._commonService.updateData(this.getID,this.registerForm.value).subscribe(data=>{
      })
      window.location.href = 'http://localhost:4200/dashboard';
    }
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
 
  isValid: boolean = false
  isValidate() {
    if (this.firstName?.invalid && this.lastName?.invalid && this.email?.invalid && this.mobileNumber?.invalid && this.password?.invalid && this.confirmPassword?.invalid) {
      this.isValid = true;
    }
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

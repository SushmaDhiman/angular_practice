import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  window = window.location.href;
  constructor(private _commonService: CommonService, public fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      lastName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      email: ['', [Validators.required, Validators.email]],
      profession: [this.registerLabels.professionSelect.selectProfession],
      mobileNumber: ['', [Validators.required,Validators.pattern('.{10,10}')]],
      password: ['', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      confirmPassword: ['', [Validators.required]],
    });
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

  updateRegister() {
    throw new Error('Method not implemented.');
  }

  submitForm() {
    if (this.registerForm.valid) {
      this._commonService.registerUserData(this.registerForm.value).subscribe(data => {
      })
    }

  }
  isValid: boolean = false
  isValidate() {
    if (this.firstName?.invalid) {
      this.isValid = true;
    }
    if (this.lastName?.invalid) {
      this.isValid = true;
    }
    if (this.email?.invalid) {
      this.isValid = true;
    }
    if (this.mobileNumber?.invalid) {
      this.isValid = true;
    }
    if (this.password?.invalid) {
      this.isValid = true;
    }
    if (this.confirmPassword?.invalid) {
      this.isValid = true;
    }
  }

}

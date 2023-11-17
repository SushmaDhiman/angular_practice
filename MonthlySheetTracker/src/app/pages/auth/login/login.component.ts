import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})
export class LoginComponent implements OnInit {
// loginForm: FormGroup;
  constructor(private _commonService: CommonService,private fb:FormBuilder) {

  }
  applicationTitle: string = this._commonService.applicationTitle;
  loginButton: string = 'Login';
  loginLabels = {
    email: 'Email',
    password: 'Password',
    remember: 'Remember me',
  };
ngOnInit(): void {
  this.getRegisterData()
}
  getRegisterData(){
    this._commonService.getRegisterData().subscribe( data=>{
      console.log(data.length);
    })
  }
  
email!: string;
password!: number;
  setValue() {
    console.log(this.email, this.password);
  }
}

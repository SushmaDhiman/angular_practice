import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  readonly Url = "http://localhost:3004/";
  constructor(private http:HttpClient) { }
  //common variables
  applicationTitle: string = 'Monthly Tracking Sheet';

detail = {
  firstName : 'Sushma',
lastName : 'Dhiman',
age : '20',
}
text: string = 'this is a common service';
myData(){
console.log(this.text);
}

postData(data: any):Observable<any>{
  return this.http.post(this.Url+ "user", data)
}
}

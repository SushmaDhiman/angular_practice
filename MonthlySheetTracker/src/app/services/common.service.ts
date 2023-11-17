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

registerUserData(data: any):Observable<any>{
  return this.http.post(this.Url+ "registerUser", data)
}

getRegisterData():Observable<any>{
  return this.http.get(this.Url+ "registerUser");
}

deleteRegisterData(data: any):Observable<any>{
  return this.http.delete(this.Url+ "registerUser"+"/"+data)
}
getDataID: any;

updateData(id: any,data: any):Observable<any>{
  return this.http.put(this.Url+ "registerUser"+"/"+id, data);
}
}

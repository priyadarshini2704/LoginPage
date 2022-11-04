import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/model/user'


@Injectable({
  providedIn: 'root'
})


export class LoginapiService {

  userData = new BehaviorSubject<User>(new User())
  public loginUrl = "https://bookcart.azurewebsites.net/api/Login";
  value1: any = localStorage.getItem("authToken");
  loginForm: any;
  route: any;


  constructor(private http: HttpClient) {

  }


  login(uservalue: any) {
    const loginvalue = this.http.post("https://bookcart.azurewebsites.net/api/Login", uservalue)
    return loginvalue
  }
}




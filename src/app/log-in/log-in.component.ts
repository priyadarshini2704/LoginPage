import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginapiService } from '../loginapi.service';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/model/user';
import {
  Router, CanActivateChild, CanLoad, Route
} from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})

export class LogInComponent implements OnInit {
  route: any;
  private unsubscribe$ = new Subject<void>();
  userId: any
  showPassword = true;
  loginuserdata = {};
  submitted = false;



  constructor(public auth: LoginapiService, public router: Router) { }
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {}

  loginuser():void {
    if (this.loginForm.valid)
  this.auth.login(this.loginForm.value).subscribe(
    () =>{
      this.router.navigate(["/Mainsheet"])
    },
    () => {
      this.loginForm.reset();
      this.loginForm.setErrors({
        invalidLogin: false
      })
    }
  )

}

}

 

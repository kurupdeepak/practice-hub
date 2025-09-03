import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertMessage } from 'src/app/modules/common/util/message';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    rememberMe: [false],
  });

  message:AlertMessage;

  redirectTo = environment.redirectTo;

  msgAvailable = false;

  alertClass="";

  constructor(private fb: FormBuilder, private authService: AuthService,private router:Router) {}

  ngOnInit(): void {}

  login() {
    if (!this.loginForm.valid) return;
    this.authService.login(this.loginForm.value).subscribe(
      (data) => {
        this.authService.sendAuthenticationEvent(true);
        this.router.navigate([this.redirectTo]);
      },
      (error) => {
        console.log('Error creating new glucose entry ');
        this.message = new AlertMessage();
        this.message.api = 'login';
        this.message.isError = true;
        this.message.message = 'Login Failed';
        this.message.status = error.status;
        this.message.statusInfo = error.statusText;
        this.msgAvailable = true;
        this.alertClass="alert-danger";
        this.authService.sendAuthenticationEvent(false);
      }
    );
  }


  get username(){ return this.loginForm.get('username');}
  get password(){ return this.loginForm.get('password');}
}

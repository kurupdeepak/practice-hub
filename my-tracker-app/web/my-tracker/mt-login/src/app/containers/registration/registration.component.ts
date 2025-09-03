import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { validatePasswordMatch } from './validators';

@Component({
  selector: 'mt-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm = this.fb.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    dob:[''],
    phone:[''],
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  },{ validators: validatePasswordMatch });

  constructor(private authService:AuthService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  get firstName() {return this.registerForm.get('firstName');}
  get lastName() {return this.registerForm.get('lastName');}
  get dob() {return this.registerForm.get('dob');}
  get email() {return this.registerForm.get('email');}
  get password() {return this.registerForm.get('password');}
  get confirmPassword() {return this.registerForm.get('confirmPassword');}

}

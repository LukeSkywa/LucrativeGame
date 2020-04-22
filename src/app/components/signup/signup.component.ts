import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginSignupService } from 'src/app/services/login-signup.service';
import { Router } from '@angular/router';

import { User } from 'src/models/user.interface';
import { HttpUserService } from 'src/app/services/http/http-user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  userListStored: User[];


  constructor(private loginSignUp:LoginSignupService, private fb: FormBuilder, private router:Router, private httpUserService:HttpUserService) { 
    this.signupForm = this.fb.group({
      id:['', Validators.required],
      // nome:['', Validators.required],
      // cognome:['', Validators.required],
      // email:['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      // telefono:['', Validators.required],
      // genere:['', Validators.required],
      path: '/assets/users/profile.jpg',
      admin: false
    });
  }

  ngOnInit(): void {}

  signup(){
    this.loginSignUp.addUser(this.signupForm.value);
  }

}

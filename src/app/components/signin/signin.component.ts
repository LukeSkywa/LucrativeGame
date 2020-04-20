import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { User } from 'src/models/user.interface';
import { LoginSignupService } from 'src/app/services/login-signup.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  userListStored: User[];


  constructor(private loginSignUp:LoginSignupService, private fb: FormBuilder, private router:Router, private httpService:HttpService) { 
    this.signinForm = this.fb.group({
      id:'',
      nome:'',
      cognome:'',
      email:'',
      username: '',
      password: '',
      telefono:'',
      genere:'',
      admin: false
    });
  }

  ngOnInit(): void {}

  signin(){
    this.loginSignUp.addUser(this.signinForm.value);
  }
}

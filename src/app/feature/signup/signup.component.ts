import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginSignupService } from 'src/app/services/login-signup.service';
import { Router } from '@angular/router';
import { User } from 'src/models/user.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  showPw: boolean;
  userListStored: User[];


  constructor(private loginSignUp:LoginSignupService, private fb: FormBuilder, private router:Router) { 
    this.showPw = false;
    this.signupForm = this.fb.group({
      id:['', Validators.required],
      nome:'',
      cognome: '',
      email:'',
      username:['', Validators.required],
      password: ['', Validators.required],
      telefono:'',
      genere:'',
      path: '/assets/users/profile.jpg',
      admin: false
    });
  }

  ngOnInit(): void {}

  showPassword(){
    this.showPw = !this.showPw;
  }

  signup(){
    this.loginSignUp.addUser(this.signupForm.value);
  }

}
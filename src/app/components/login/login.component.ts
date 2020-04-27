import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginSignupService } from 'src/app/services/login-signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  
  showPw: boolean;
  loginForm: FormGroup;
  elementRef: any;
  
  constructor(private loginSignUp:LoginSignupService, private router:Router, private fb:FormBuilder){
    this.showPw = false;
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      memorizza: [] //SE E' VERO MEMORIZZA NELLA LOCAL STORAGE.
    })
  }
  
  ngOnInit(): void {}

  showPassword(){
    this.showPw = !this.showPw;
  }

  login(form) {
    this.loginSignUp.eseguiLogin(form);
  }
}


import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  
  constructor(private loginService:LoginService, private router:Router, private fb:FormBuilder){
    this.loginForm = this.fb.group({
      username: '',
      password: ''
    })
  }
  
  ngOnInit(): void {}

  login(form) {
    this.loginService.eseguiLogin(form);
  }
 
}


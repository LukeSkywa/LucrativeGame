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
  
  
  constructor(private loginService:LoginService, private router:Router){}
  
  ngOnInit(): void {}

  login(username:string, password:string) {
    this.loginService.eseguiLogin(username,password);
  }

  loginSession(username:string, password:string){ 
    
    sessionStorage.setItem('user', username);
    sessionStorage.setItem('password', password);

    this.loginService.eseguiLoginSession();
  }
 
}


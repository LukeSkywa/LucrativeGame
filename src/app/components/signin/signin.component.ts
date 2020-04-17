import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;


  constructor(private signin: LoginService, private fb: FormBuilder, private router:Router) { 
    this.signinForm = this.fb.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {}

  onSubmit(user){
    console.log(user);
    this.signin.signin(user);
    this.router.navigateByUrl('/home');
    
  }
}

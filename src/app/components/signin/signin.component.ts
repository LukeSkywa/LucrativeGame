import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/services/signin.service';
import { HttpService } from 'src/app/services/http/http.service';
import { User } from 'src/models/user.interface';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  userListStored: User[];


  constructor(private signinService: SigninService, private fb: FormBuilder, private router:Router, private httpService:HttpService) { 
    this.signinForm = this.fb.group({
      nome:'',
      cognome:'',
      email:'',
      username: '',
      password: '',
      telefono:'',
      genere:''
    });
  }

  ngOnInit(): void {}

  signin(){
    this.signinService.addUser();
  }
}

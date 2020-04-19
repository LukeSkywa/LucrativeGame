import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/services/signin.service';
import { User } from 'src/models/user.interface';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  userListStored: User[];


  constructor(private signinService: SigninService, private fb: FormBuilder, private router:Router) { 
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
    this.signinService.addUser(this.signinForm.value);
  }
}

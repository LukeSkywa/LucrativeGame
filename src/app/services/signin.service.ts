import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http/http.service';
import { User } from 'src/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  userListStored: User[];

  constructor(private router: Router, private httpService: HttpService) { }

  retrieveUsers(){
    this.httpService.getUsers().subscribe(reponse => {
      this.userListStored = reponse;
      console.log(this.userListStored);
    }, err => {
      console.log('error');
    });
  }

  user: User = { 
    nome: "Davide",
    cognome: "Carizzoni",
    username: "davidecarizzoni",  
    password: "12345", 
    email: "davidecarizzoni@gmail.com",
    telefono: "000000000",
    genere: "M", 
    "admin": true
  }

  addUser(){
    this.httpService.postUser(this.user).subscribe(()=>{
      this.retrieveUsers();
    });
  }
}

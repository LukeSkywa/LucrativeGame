import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user.interface';
import { HttpUserService } from './http/http-user.service';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  userListStored: User[];

  constructor(private router: Router, private httpUserService: HttpUserService) { }

  retrieveUsers(){
    this.httpUserService.getUsers().subscribe(reponse => {
      this.userListStored = reponse;
      console.log(this.userListStored);
    }, err => {
      console.log('error');
    });
  }

  addUser(form){
    this.httpUserService.postUser(form).subscribe(()=>{
      this.retrieveUsers();
    });
  }
}

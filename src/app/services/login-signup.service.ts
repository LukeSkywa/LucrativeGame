import { Injectable } from '@angular/core';
import { User } from 'src/models/user.interface';
<<<<<<< HEAD:src/app/services/login-signup.service.ts
import { Router } from '@angular/router';
import { HttpService } from './http/http.service';
=======
import { HttpUserService } from './http/http-user.service';
>>>>>>> origin/master:src/app/services/login.service.ts

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  private userListStored: User [];

  constructor(private router: Router, private httpUserService:HttpUserService) { 
    this.retrieveUsers() 
  }

  retrieveUsers(){
    this.httpUserService.getUsers().subscribe(reponse => {
      this.userListStored = reponse;
    }, err => {
      console.log('error');
    });
  }

  isPres(form):boolean{
    let controllo = false;
    this.userListStored.forEach(element => {
      if(element.username === form.username && element.password === form.password){
        element.admin === true ? sessionStorage.setItem('privilege','admin') : sessionStorage.setItem('privilege','user')
        controllo = true;
      } 
    });
    return controllo;
  }

  eseguiLogin(form){
    if(this.isPres(form)){
      sessionStorage.setItem('username',form.username);
      this.router.navigateByUrl('/home');
      window.alert("LOGIN EFFETTUATTO");
    }
    else{
      window.alert("LOGIN ERRATO");
      this.router.navigateByUrl('/login');
    }
      
  }

  addUser(form){
    this.httpService.postUser(form).subscribe(()=>{
      this.retrieveUsers();
      this.router.navigateByUrl('/login');
    });
  }

}

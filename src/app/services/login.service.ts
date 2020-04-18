import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user.interface';
import { HttpService } from './http/http.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userListStored: User [];

  constructor(private router: Router, private httpService:HttpService) { 
    this.retrieveUsers() 
  }

  retrieveUsers(){
    this.httpService.getUsers().subscribe(reponse => {
      this.userListStored = reponse;
      console.log(this.userListStored);
    }, err => {
      console.log('error');
    });
  }

  isPres(form):boolean{
    console.log(form.username);
    console.log(form.password);
  
    let controllo = false;
    this.userListStored.forEach(element => {
      if(element.username==form.username && element.password==form.password){
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
      window.alert("ERRORE");
      this.router.navigateByUrl('/login');
    }
      
  }

  signin(user: User){
    user.admin = false; 
    this.userListStored.push(user);
  }

  

}

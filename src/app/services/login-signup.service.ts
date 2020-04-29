import { Injectable } from '@angular/core';
import { User } from 'src/models/user.interface';
import { Router } from '@angular/router';
import { HttpService } from './http/http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  private userListStored: User [];

  constructor(private router: Router, private httpService:HttpService) { 
    this.retrieveUsers() 
  }

  retrieveUsers(){
    this.httpService.getUsers().subscribe(response => {
      this.userListStored = response;
    }, err => {
      console.log('error');
    });
  }

  isPres(form):boolean{
    let controllo = false;
    this.userListStored.forEach(element => {
      if(element.username === form.username && element.password === form.password){
        element.admin === true ? sessionStorage.setItem('privilege','admin') : sessionStorage.setItem('privilege','user')
        if(form.memorizza){
          localStorage.setItem('user', JSON.stringify(element.id));
        }else{
          sessionStorage.setItem('user', JSON.stringify(element.id));
        }
        controllo = true;
      } 
    });
    return controllo;
  }

  eseguiLogin(form){
    if(this.isPres(form)){
      sessionStorage.setItem('username',form.username);
      this.router.navigateByUrl('/home');
      window.alert("LOGIN EFFETTUATO");
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

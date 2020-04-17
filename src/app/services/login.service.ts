import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserItem } from '../../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userListStored: UserItem [] = [
    {username: 'Alessio', password: 'Ciao', admin: true},
    {username: 'Luca', password: 'Psw', admin: false}
  ];

  constructor(private router: Router) { }

  isPres(username:String, password:String):boolean{
    let controllo = false;
    this.userListStored.forEach(element => {
      if(element.username === username && element.password === password){
        element.admin === true ? sessionStorage.setItem('privilege','admin') : sessionStorage.setItem('privilege','user')
        controllo = true;
      } 
    });
    return controllo;
  }

  eseguiLogin(username:string, password:string){
    if(this.isPres(username, password)){
      sessionStorage.setItem('username',username);
      this.router.navigateByUrl('/home');
    }
  }

  eseguiLoginSession(){
    let username = sessionStorage.getItem('username');
    let password = sessionStorage.getItem('password');

    if(this.isPres(username,password)){
      this.router.navigateByUrl('/home');
    }
  }

  signin(user: UserItem){
    user.admin = false; 
    this.userListStored.push(user);
  }

}

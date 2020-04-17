import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserItem } from '../../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userListStored: UserItem[] = [
    {username: 'Alessio', password: 'Ciao', ruolo: 'admin'},
    {username: 'Luca', password: 'Psw', ruolo: 'user'}
  ];

  constructor(private router: Router) { }

  //isLogin(ut:String, psw:String, rule:string):boolean{
  isLogin(ut:String, psw:String):boolean{
    for(let i=0;i<this.userListStored.length;i++)
      //if(this.userListStored[i].username===ut && this.userListStored[i].password===psw && this.userListStored[i].ruolo===rule)
      if(this.userListStored[i].username===ut && this.userListStored[i].password===psw)
        return true;
      return false;
  }

  // eseguiLogin(ut:string, psw:string, ruolo:string){
    eseguiLogin(ut:string, psw:string){
    //if(this.isLogin(ut,psw,ruolo)){
    if(this.isLogin(ut,psw)){
      sessionStorage.setItem('user', ut);
      //sessionStorage.setItem('ruolo', ruolo);
      window.alert("login effettuato")
      this.router.navigateByUrl('/home');
    }
    else{
      window.alert("login errato");
      this.router.navigateByUrl('/login');
    }
  }

  eseguiRegister(ut:string, psw:string){
    this.userListStored.push({username: ut, password:psw, ruolo:'user'});
    console.log(this.userListStored);
  }

}

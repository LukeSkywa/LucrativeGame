import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.interface';
import { ClothesItem } from 'src/models/clothes-item.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  //USERS
  getUsers():Observable<any>{
    return this.httpClient.get('http://localhost:3000/users');
  }

  getUserLogged():Observable<any>{
    if(sessionStorage.getItem('user')){
      return this.httpClient.get('http://localhost:3000/users/' + Number.parseInt(JSON.parse(sessionStorage.getItem('user'))));
    }else if(localStorage.getItem('user')){
      return this.httpClient.get('http://localhost:3000/users/' + Number.parseInt(JSON.parse(localStorage.getItem('user'))));
    }
  }

  postUser(user: User){
    return this.httpClient.post('http://localhost:3000/users', user);
  }

  updateUser(user: User){
    return this.httpClient.put('http://localhost:3000/users/' + user.id, user);
  }

  // CLOTHES
  getClothes(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/clothes');
  }

  getClothesId(id: number):Observable<ClothesItem> {
    return this.httpClient.get<ClothesItem>('http://localhost:3000/clothes/' + id);
  }

  updateClothes(clothes:ClothesItem){
    return this.httpClient.put('http://localhost:3000/clothes/' + clothes.id, clothes)
  }

  getClothesFiltered(filtro1?:string, cond1?: string, filtro2?:string, cond2?:string): Observable<any>{
    if (filtro1 != null && filtro1 !== '' && filtro2 != null && filtro2 !== '') { 
      return this.httpClient.get('http://localhost:3000/clothes?' + filtro1 + '=' + cond1 + '&' + filtro2 + '=' + cond2);
    }
    if (filtro1 != null && filtro1 !== '' && cond1 != null && cond1 !== '') { 
      return this.httpClient.get('http://localhost:3000/clothes?' + filtro1 + '=' + cond1);
    }
  }
  
  getClothesResearch(filtro?: string):Observable<any>{
    if(filtro != null && filtro != ''){
      return this.httpClient.get('http://localhost:3000/clothes?q=' + filtro)
    }
  }

  //SEND FEEDBACK
  invia(url: string, body: { name: any; replyto: any; message: any; }, arg2: {
    headers: import("@angular/common/http").HttpHeaders;
  }) {
    return this.httpClient.post(url,body,arg2); 
  }
}

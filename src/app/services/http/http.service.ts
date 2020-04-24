import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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
    return this.httpClient.get('http://localhost:3000/users/' + Number.parseInt(JSON.parse(sessionStorage.getItem('user'))));
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

  getClothesFilterd(filtro:string):Observable<any>{
    return this.httpClient.get('http://localhost:3000/clothes?'+filtro +'=true');
  }
  
  //SEND FEEDBACK
  invia(url: string, body: { name: any; replyto: any; message: any; }, arg2: {
    headers: import("@angular/common/http").HttpHeaders;
  }) {
    return this.httpClient.post(url,body,arg2); 
  }


}

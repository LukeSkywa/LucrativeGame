import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpUserService {

  constructor(private httpClient: HttpClient) { }

  // USERS
  getUsers():Observable<any>{
    return this.httpClient.get('http://localhost:3000/users');
  }

  postUser(user: User){
    return this.httpClient.post('http://localhost:3000/users', user);
  }

  updateUser(user: User){
    return this.httpClient.put('http://localhost:3000/users/'+user.id, user);
  }

}

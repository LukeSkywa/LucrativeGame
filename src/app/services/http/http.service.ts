import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClothesItem } from 'src/models/clothes-item.interface';
import { User } from 'src/models/user.interface';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  // CLOTHES
  getClothes(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/clothes');
  }

  getClothesId(id: number):Observable<ClothesItem> {
    return this.httpClient.get<ClothesItem>('http://localhost:3000/clothes/' + id);
  }

  getClothesGenere(genere?:string): Observable<HttpResponse<ClothesItem[]>> {
    let params: HttpParams;
    if(genere != null && genere != ""){
      params = new HttpParams().set('genere',genere);
    }
    return this.httpClient.get<ClothesItem[]>('http://localhost:3000/clothes', {observe: 'response', params: params})
  }


  // USERS
  getUsers():Observable<any>{
    return this.httpClient.get('http://localhost:3000/users');
  }

  postUser(user: User){
    return this.httpClient.post('http://localhost:3000/users', user);
  }


}

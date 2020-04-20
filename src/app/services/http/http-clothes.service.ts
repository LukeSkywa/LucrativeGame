import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClothesItem } from 'src/models/clothes-item.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpClothesService {

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
}

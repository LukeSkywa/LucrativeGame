import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from 'src/models/feedback.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpFeedbackService {

  constructor(private httpClient: HttpClient) { }

  postFeedback(feedback:Feedback){
    return this.httpClient.post('http://localhost:3000/feedback', feedback);
  }

  getFeedback():Observable<any>{
    return this.httpClient.get('http://localhost:3000/feedback');
  }
}

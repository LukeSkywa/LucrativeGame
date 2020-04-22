import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpFeedbackService } from 'src/app/services/http/http-feedback.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder, private httpFeedbackService: HttpFeedbackService, private router:Router) { 
    this.feedbackForm = this.fb.group({
      id: '',
      nome: '',
      cognome: '',
      genere: '',
      email: '',
      telefono: '',
      messaggio: ''
    });
  }

  ngOnInit(): void {
  }

  addFeedback(feedbackForm){
    this.httpFeedbackService.postFeedback(feedbackForm).subscribe(()=>{});
    
    if (feedbackForm.valid) {
      const email = feedbackForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.httpFeedbackService.invia('https://formspree.io/xjvenkaa',
        { name: email.name, replyto: email.email, message: email.messages },
        { 'headers': headers }).subscribe(
          response => {
            window.alert("Feedback inviato con successo");
            console.log(response);
          }
        );
    }

    // window.alert("FEEDBACK INVIATO CON SUCCESSO");
    this.router.navigateByUrl('/home'); //ritorna alla home dopo aver lasciato il feedback
  }
}

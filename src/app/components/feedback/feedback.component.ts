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

  addFeedback(contactForm){
    this.httpFeedbackService.postFeedback(this.feedbackForm.value).subscribe(()=>{});
    console.log(contactForm.value);
    if (contactForm.valid) {
      const feedback = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.httpFeedbackService.invia('https://formspree.io/xeqlyodw',
        { name: feedback.name, replyto: feedback.email, message: contactForm.value.messaggio },
        { 'headers': headers }).subscribe(() => {});
    }

    this.router.navigateByUrl('/home'); //ritorna alla home dopo aver lasciato il feedback
  }
}

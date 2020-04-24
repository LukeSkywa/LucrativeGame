import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;
  generi = ['Uomo', 'Donna', 'Altro'];

  constructor(private fb: FormBuilder, private httpService: HttpService, private router:Router) { 
    this.feedbackForm = this.fb.group({
      id: '',
      nome: '',
      cognome: '',
      genere: 'Uomo',
      email: '',
      telefono: '',
      messaggio: ''
    });
  }

  ngOnInit(): void {
  }

  addFeedback(contactForm){
    console.log(contactForm.value);
    if (contactForm.valid) {
      const feedback = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.httpService.invia('https://formspree.io/xeqlyodw',
        { name: feedback.name, replyto: feedback.email, message: contactForm.value.messaggio },
        { 'headers': headers }).subscribe(() => {});
    }
    this.router.navigateByUrl('/home'); //ritorna alla home dopo aver lasciato il feedback
  }
}

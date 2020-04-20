import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpFeedbackService } from 'src/app/services/http/http-feedback.service';
import { Router } from '@angular/router';

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

  addFeedback(){
    this.httpFeedbackService.postFeedback(this.feedbackForm.value).subscribe(()=>{});
    window.alert("FEEDBACK INVIATO CON SUCCESSO");
    this.router.navigateByUrl('/home'); //ritorna alla home dopo aver lasciato il feedback
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from 'src/models/user.interface';

@Component({
  selector: 'app-modifica-profilo',
  templateUrl: './modifica-profilo.component.html',
  styleUrls: ['./modifica-profilo.component.scss']
})
export class ModificaProfiloComponent implements OnInit {

  modificaProfilo: FormGroup;
  user: User;
  // sesso = ['Uomo', 'Donna', 'Altro'];

  get nome(): FormControl{return this.modificaProfilo.get('nome') as FormControl;} 
  get cognome(): FormControl{return this.modificaProfilo.get('cognome') as FormControl;} 
  get email(): FormControl{return this.modificaProfilo.get('email') as FormControl;}
  get sesso(): FormControl{return this.modificaProfilo.get('sesso') as FormControl;} 
  get telefono(): FormControl{return this.modificaProfilo.get('telefono') as FormControl;}


  constructor(private fb: FormBuilder) {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.modificaProfilo = this.fb.group({
      nome: this.user.nome,
      cognome: this.user.cognome,
      email: this.user.email,
      sesso: this.user.genere,
      telefono: this.user.telefono
    })
  }

  ngOnInit(): void {
  }

  sendModify(){
    
  }

}

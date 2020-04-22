import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from 'src/models/user.interface';
import { HttpUserService } from 'src/app/services/http/http-user.service';

@Component({
  selector: 'app-modifica-profilo',
  templateUrl: './modifica-profilo.component.html',
  styleUrls: ['./modifica-profilo.component.scss']
})
export class ModificaProfiloComponent implements OnInit {

  modificaProfilo: FormGroup;
  user: User;
  // sesso = ['Uomo', 'Donna', 'Altro'];

  // COSTRUISCO IL FORM CON I DATI DELL'UTENTE PRESENTE IN SESSION  
  constructor(private fb: FormBuilder, private httpUserService: HttpUserService) {
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
    let userModified: User;
    userModified = this.modificaProfilo.value;
    userModified.path = '/assets/users/profile.jpg'
    userModified.id = this.user.id;
    console.log(this.modificaProfilo.value)
    console.log(userModified);

    this.httpUserService.updateUser(userModified).subscribe(()=>{});
  }

}

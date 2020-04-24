import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from 'src/models/user.interface';
import { HttpUserService } from 'src/app/services/http/http-user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modifica-profilo',
  templateUrl: './modifica-profilo.component.html',
  styleUrls: ['./modifica-profilo.component.scss']
})
export class ModificaProfiloComponent implements OnInit {

  selectedFile: File;
  modificaProfilo: FormGroup;
  user: User;
  generi = ['Uomo', 'Donna', 'Altro'];

  // COSTRUISCO IL FORM CON I DATI DELL'UTENTE PRESENTE IN SESSION  
  constructor(private fb: FormBuilder, private httpUserService: HttpUserService, private router: Router, private httpClient: HttpClient) {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.modificaProfilo = this.fb.group({
      id: this.user.id,
      nome: this.user.nome,
      cognome: this.user.cognome,
      username: this.user.username,
      password: this.user.password,
      email: this.user.email,
      telefono: this.user.telefono,
      genere: this.user.genere,
      admin: this.user.admin,
      path: this.user.path
      
    })
  }

  ngOnInit(): void {}

  sendModify(){
    sessionStorage.setItem('user', JSON.stringify(this.modificaProfilo.value));
    this.httpUserService.updateUser(this.modificaProfilo.value).subscribe(()=>{});
    this.router.navigateByUrl('/home');
    window.alert('Modifica effettuata con sucesso');
  }

  onFileChanged(event){
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  // onUpload(){
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name);
  //   this.http.post('http://localhost:4200/assets', fd)
  //     .subscribe(res => {
  //       console.log(res);
  //     });

  
  onUpload(){
    const fb = new FormData();
    fb.append('image', this.selectedFile, this.selectedFile.name)
    this.httpClient.post('http://localhost:4200/assets/', fb).subscribe(res => {
      console.log(res);
    })
  }

}

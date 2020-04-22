import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modifica-profilo',
  templateUrl: './modifica-profilo.component.html',
  styleUrls: ['./modifica-profilo.component.scss']
})
export class ModificaProfiloComponent implements OnInit {

  profilo: FormGroup;
  sesso = ['Uomo', 'Donna', 'Altro'];

  constructor() { }

  ngOnInit(): void {
  }

}

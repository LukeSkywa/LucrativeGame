import { Component, OnInit } from '@angular/core';
import { ClothesItem } from 'src/models/clothes-item.interface';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
 
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  
  listSel: number;
  viewBtn: number;
  mostraPiu: Boolean;
  clothesList: ClothesItem [] = [];
  clothesListFiltered: ClothesItem [] = [];
 
  constructor(private router: Router, private httpService: HttpService) { 
    this.mostraPiu = false;
    this.viewList(1);
  }
 
  retrieveClothes(){
    this.httpService.getClothes().subscribe(reponse => {
      this.clothesList = reponse;
      this.clothesListFiltered = reponse;
    }, err => {
      console.log('errore');
    });
  }
 
  viewList(list: number){
    this.listSel = list;
    this.clothesListFiltered = this.clothesList.filter( item => {
      switch(list){
        case 1: return !item.nascosto; //SE E' NASCOSTO NON LO FACCIO VEDERE. 
        case 2: return item.preferito;
        case 3: return item.nascosto;
      }
    })
  }
 
  switchPreferito(id:number){
    let clothes: ClothesItem = this.clothesList.find( item => item.id === id);
    clothes.preferito = !clothes.preferito;
    this.httpService.updateClothes(clothes).subscribe(() => {});
    if(this.listSel === 2){
      this.viewList(2);
    }
  }
 
  switchNascondi(id:number){
    let clothes: ClothesItem = this.clothesList.find( item => item.id === id);
    clothes.nascosto = !clothes.nascosto;
    this.httpService.updateClothes(clothes).subscribe(() => {});
    if(this.listSel === 3){
      this.viewList(3);
    }
    if(this.listSel === 1){
      this.viewList(1);
    }
  }

  show(index: number) {
    this.viewBtn === index ? this.viewBtn = null : this.viewBtn = index;
  }
 
  mostraDiPiu(){ this.mostraPiu = true; }
 
  mostraDiMeno(){ this.mostraPiu = false; }
 
  ngOnInit(): void {
    this.retrieveClothes();
  }
 
}
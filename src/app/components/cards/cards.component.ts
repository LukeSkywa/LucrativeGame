import { Component, OnInit } from '@angular/core';
import { HttpClothesService } from 'src/app/services/http/http-clothes.service';
import { Router } from '@angular/router';
import { ClothesItem } from 'src/models/clothes-item.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  mostraPiu: Boolean;
  clothesList: ClothesItem [] = [];
  clothesListFiltered: ClothesItem [] = [];

  constructor(private router: Router, private httpClothesService: HttpClothesService) { 
    this.mostraPiu = false;
  }

  retrieveClothes(){
    this.httpClothesService.getClothes().subscribe(reponse => {
      this.clothesList = reponse;
    }, err => {
      console.log('errore');
    });
  }

  viewList(list: number){
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
    this.httpClothesService.updateClothes(clothes).subscribe(() => {});
  }

  switchNascondi(id:number){
    let clothes: ClothesItem = this.clothesList.find( item => item.id === id);
    clothes.nascosto = !clothes.nascosto;
    this.httpClothesService.updateClothes(clothes).subscribe(() => {});
  }

  mostraDiPiu(){ this.mostraPiu = true; }

  mostraDiMeno(){ this.mostraPiu = false; }

  ngOnInit(): void {
    this.retrieveClothes();
  }

}

import { Component, OnInit } from '@angular/core';
import { ClothesItem } from 'src/models/clothes-item.interface';
import { Router } from '@angular/router';
import { HttpClothesService } from 'src/app/services/http/http-clothes.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  
  clothesList: ClothesItem [] = [];
  clothesListFiltered: ClothesItem [] = [];

  constructor(private router: Router, private httpClothesService: HttpClothesService) { }

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
        case 1: return !item.nascosto;
        case 2: return item.preferito;
        case 3: return item.nascosto;
      }
    })
  }

  ngOnInit(): void {
    this.retrieveClothes();
  }


}

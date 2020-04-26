import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClothesItem } from 'src/models/clothes-item.interface';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  listSel: number;
  viewBtn: number;
  mostraPiu: Boolean;
  clothesList: ClothesItem [] = [];
  clothesListFiltered: ClothesItem [] = [];

  constructor(private router: Router, private httpService: HttpService) { 
    this.mostraPiu = false;
  }

  viewList(list:number, filtro1?:string, cond1?: string, filtro2?:string, cond2?:string){
    this.listSel= list;
    console.log(this.mostraPiu);
    this.httpService.getClothesFiltered(filtro1,cond1,filtro2,cond2).subscribe( response => {
      if(this.mostraPiu == false)
        this.clothesListFiltered = response.slice(0,5);
      else
        this.clothesListFiltered = response;
    })
  }

  switchPreferito(id:number){
    let clothes: ClothesItem = this.clothesListFiltered.find( item => item.id === id);
    clothes.preferito = !clothes.preferito;
    this.httpService.updateClothes(clothes).subscribe(() => {});
    if(this.listSel === 2){
       this.viewList(2,'preferito','true','nascosto','false');
    }
  }

  switchNascondi(id:number){
    let clothes: ClothesItem = this.clothesListFiltered.find( item => item.id === id);
    clothes.nascosto = !clothes.nascosto;
    this.httpService.updateClothes(clothes).subscribe(() => {});
    if(this.listSel === 3){
       this.viewList(3,'nascosto', 'true');
    }
    if(this.listSel === 2){ //nei preferetiti vengono visualizzati anche quelli nascosti. Da la precedenza ai preferiti
      this.viewList(2,'preferito','true','nascosto','false');
    }
    if(this.listSel === 1){
       this.viewList(1,'nascosto','false');
    }
  }

  show(index: number) {
    this.viewBtn === index ? this.viewBtn = null : this.viewBtn = index;
  }

  mostra(){ 
    this.mostraPiu = !this.mostraPiu; 
    if(this.listSel === 3){
      this.viewList(3,'nascosto', 'true');
    }
    if(this.listSel === 2){ //nei preferetiti vengono visualizzati anche quelli nascosti. Da la precedenza ai preferiti
     this.viewList(2,'preferito','true','nascosto','false');
    }
    if(this.listSel === 1){
      this.viewList(1,'nascosto','false');
    }
  }

  ngOnInit(): void {
    this.viewList(1,'nascosto','false');
  }

}

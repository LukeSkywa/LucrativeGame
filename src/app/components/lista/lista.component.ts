import { Component, OnInit, ElementRef } from '@angular/core';
import { ClothesItem } from 'src/models/clothes-item.interface';
import { HttpService } from 'src/app/services/http/http.service';
import { ActivatedRoute, Router } from '@angular/router';
 
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  
  sub:any;
  ricerca:string = '';
  private button;

  listSel: number;
  viewBtn: number;
  mostraPiu: Boolean;
  clothesListFiltered: ClothesItem [] = [];
 
  constructor(private httpService: HttpService, private route:ActivatedRoute, private router:Router, private elementRef: ElementRef) { 
    this.mostraPiu = false;
  }
 
  viewList(list:number, filtro1?:string, cond1?: string, filtro2?:string, cond2?:string){
    this.router.navigateByUrl('/list');
    
    this.viewBtn = null;
    this.listSel= list;
    this.httpService.getClothesFiltered(filtro1,cond1,filtro2,cond2).subscribe( response => {
        this.clothesListFiltered = response;
    })
  }
 
  switchPreferito(id:number){
    let clothes: ClothesItem = this.clothesListFiltered.find( item => item.id === id);
    clothes.preferito = !clothes.preferito;
    this.httpService.updateClothes(clothes).subscribe(() => {
      if(this.listSel === 2){
        this.viewList(2,'preferito','true','nascosto','false')
      }
    });
  }
 
  switchNascondi(id:number){
    let clothes: ClothesItem = this.clothesListFiltered.find( item => item.id === id);
    clothes.nascosto = !clothes.nascosto;
    console.log(this.listSel);
    this.httpService.updateClothes(clothes).subscribe(() => {
      if(this.listSel === 1){
        this.viewList(1,'nascosto','false');
      }
      if(this.listSel === 2){
        this.viewList(2,'preferito','true','nascosto','false')
      }
      if(this.listSel === 3){
        this.viewList(3,'nascosto','true');
      }
    });
  }

  search(filtro: string){
    this.httpService.getClothesResearch(filtro).subscribe(response => {
      this.clothesListFiltered = response;
      console.log(this.clothesListFiltered);
    });
  }

  show(index: number) {
    this.viewBtn === index ? this.viewBtn = null : this.viewBtn = index;
  }
 
  mostra(){ 
    this.mostraPiu = !this.mostraPiu; 
    if(this.listSel === 1){
      this.viewList(1,'nascosto','false');
    }
    if(this.listSel === 3){
      this.viewList(3,'nascosto', 'true');
    }
    if(this.listSel === 2){ 
     this.viewList(2,'preferito','true');
    }
  }
 
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.ricerca = params['filtro'];
      if(this.ricerca)
        this.search(this.ricerca)
      else
      this.viewList(1,'nascosto','false');
    });
  }

  switch(){
    this.button = this.elementRef.nativeElement.querySelector("#btn1");
    this.button.classList.remove("focus");
  }
 
}
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
  
  clothesList: ClothesItem[] = [];
  list1 = true;
  list2 = false;
  list3 = false;


  constructor(private router: Router, private httpClothesService: HttpClothesService) { }

  retrieveClothes(){
    this.httpClothesService.getClothes().subscribe(reponse => {
      this.clothesList = reponse;
    }, err => {
      console.log('errore');
    });
  }

  viewList1(){
    this.list1 = true;
    this.list2 = false;
    this.list3 = false;
  }

  viewList2(){
    this.list1 = false;
    this.list2 = true;
    this.list3 = false;
  }

  viewList3(){
    this.list1 = false;
    this.list2 = false;
    this.list3 = true;
  }

  ngOnInit(): void {
    this.retrieveClothes();
  }


}

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

  constructor(private router: Router, private httpClothesService: HttpClothesService) { }

  retrieveClothes(){
    this.httpClothesService.getClothes().subscribe(reponse => {
      this.clothesList = reponse;
    }, err => {
      console.log('errore');
    });
  }

  ngOnInit(): void {
    this.retrieveClothes();
  }

}

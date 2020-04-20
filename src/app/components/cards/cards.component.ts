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

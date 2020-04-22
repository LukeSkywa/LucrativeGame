import { Injectable } from '@angular/core';
import { ClothesItem } from 'src/models/clothes-item.interface';

@Injectable({
  providedIn: 'root'
})
export class ClothesListService {
  private clothesListStored: ClothesItem[] = [
    { id: 1, name: "scarpa", prezzo: 200, description: "descrizione1", genere: "abbigliamento"},
    { id: 2, name: "maglia", prezzo: 100, description: "descrizione2", genere: "abbigliamento"},
    { id: 3, name: "pantalone", prezzo: 90, description: "descrizione3", genere: "abbigliamento"}
  ];

  constructor() { }

  getClothesList(): ClothesItem[] {
    return this.clothesListStored;
  }

  getClothesItem(id: number): ClothesItem {
    return this.clothesListStored.find(item =>{
      return item.id === id;
    });
  }
}

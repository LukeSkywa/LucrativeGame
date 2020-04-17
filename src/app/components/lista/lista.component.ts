import { Component, OnInit } from '@angular/core';
import { ClothesItem } from 'src/models/clothes-item.interface';
import { ClothesListService } from 'src/app/services/clothes-list.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  clothesList: ClothesItem[] = [];

  constructor(private clothesListService: ClothesListService) {
    this.clothesList = this.clothesListService.getClothesList();
  }

  ngOnInit(): void {
  }

}

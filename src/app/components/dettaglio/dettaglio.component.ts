import { Component, OnInit } from '@angular/core';
import { ClothesItem } from 'src/models/clothes-item.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss']
})
export class DettaglioComponent implements OnInit {

  clothes: ClothesItem;
  id:number;

  constructor(private router: Router, private httpService: HttpService, private activatedRoute: ActivatedRoute) { }

  catchId(){
    this.activatedRoute.paramMap.subscribe( params => {
      console.log(params);
      console.log(this.clothes);
      this.id = Number(params.get('id'));
      console.log("CATCH ID: "+ this.id)
    })
  }

  retrieveSingleClothes(id:number){
    this.httpService.getClothesId(id).subscribe(reponse => {
      this.clothes = reponse;
      console.log(this.clothes);
    }, err => {
      console.log('errore');
    });
  }

  ngOnInit(): void {
    this.catchId();
    this.retrieveSingleClothes(this.id);
  }

}

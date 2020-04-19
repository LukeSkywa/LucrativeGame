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
  id:string;

  constructor(private router: Router, private httpService: HttpService, private activatedRoute: ActivatedRoute) { }

  catchId(){
    this.activatedRoute.paramMap.subscribe( params => {
      console.log(params);
      this.id = params.get('id');
      console.log("CATCH ID: "+ this.id)
    })
  }

  retrieveSingleClothes(id:string){
    this.httpService.getClothesId(this.id).subscribe(reponse => {
      this.clothes = reponse;
      console.log("vestito" + this.clothes + typeof(this.clothes));
    }, err => {
      console.log('errore');
    });
  }

  ngOnInit(): void {
    this.catchId();
    this.retrieveSingleClothes(this.id);
  }

}

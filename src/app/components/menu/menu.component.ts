import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MenuItem } from 'src/models/menu-item.interface';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  sub: any;
  ricerca: boolean;

  ricercaLista: boolean;
  ricercaCards: boolean;
  
  filtro: string = '';
  menu: MenuItem[] = [
    {id:1, descrizione:'HomePage', url:'/home'},
    {id:2, descrizione:'Lista', url:'/list'},
    {id:3, descrizione:'Cards', url:'/cards'},
    {id:4, descrizione:'Feedback', url:'/feedback'},
    {id:5, descrizione:'Profilo', url:'/profilo'},
  ]

  username = sessionStorage.getItem('username');

  constructor(private router:Router, private route:ActivatedRoute) {
    this.ricerca = false;
    this.ricercaLista = false;
    this.ricercaCards = false;
    this.sub = this.route.params.subscribe(params => {
      this.filtro = params['filtro'];
    });
    router.events.subscribe(event => {​
      if(event instanceof NavigationEnd)
        if(event.urlAfterRedirects === "/list" || event.urlAfterRedirects === "/list/" + this.filtro){
          this.ricerca = true;
          this.ricercaLista = true;
        }
        else if(event.urlAfterRedirects === "/cards" || event.urlAfterRedirects === "/cards/" + this.filtro){
          this.ricerca = true;
          this.ricercaCards = true;
        }
    });
  }

  ngOnInit(): void {}

  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

  search(filtro:string){
    if(this.ricercaLista)
      this.router.navigateByUrl("list/" + filtro);
    if(this.ricercaCards)
      this.router.navigateByUrl("cards/" + filtro);
  }

}

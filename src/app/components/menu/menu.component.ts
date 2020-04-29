import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItem } from 'src/models/menu-item.interface';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  ricerca: boolean;
  menu: MenuItem[] = [
    {id:1, descrizione:'HomePage', url:'/home'},
    {id:2, descrizione:'Lista', url:'/list'},
    {id:3, descrizione:'Cards', url:'/cards'},
    {id:4, descrizione:'Feedback', url:'/feedback'},
    {id:5, descrizione:'Profilo', url:'/profilo'},
  ]

  username = sessionStorage.getItem('username');

  constructor(private router:Router) {
    this.ricerca = false;
    router.events.subscribe(event => {​
      if(event instanceof NavigationEnd) 
        event.urlAfterRedirects === "/cards" || event.urlAfterRedirects === "/list" ? this.ricerca=true: this.ricerca=false;
    });
  }

  ngOnInit(): void {}

  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

  search(filtro:string){
    this.router.navigateByUrl("list/"+filtro);
  }

}

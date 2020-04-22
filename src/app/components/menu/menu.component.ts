import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  username = sessionStorage.getItem('username');

  constructor(private router:Router) { }

  ngOnInit(): void {}

  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

}

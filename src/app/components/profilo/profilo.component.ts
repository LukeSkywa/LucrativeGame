import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.interface';


@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.user);
  }

}

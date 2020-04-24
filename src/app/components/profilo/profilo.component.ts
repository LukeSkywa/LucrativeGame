import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.interface';
import { HttpUserService } from 'src/app/services/http/http-user.service';


@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {

  user: User;

  constructor(private httpUserService: HttpUserService ) { }

  ngOnInit(): void {
    this.httpUserService.getUserLogged().subscribe(response => {
      this.user = response;
    });
    console.log(this.user);
  }

}

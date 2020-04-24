import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.interface';
import { HttpService } from 'src/app/services/http/http.service';


@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {

  user: User;

  constructor(private httpService: HttpService ) { }

  ngOnInit(): void {
    this.httpService.getUserLogged().subscribe(response => {
      this.user = response;
    });
    console.log(this.user);
  }

}

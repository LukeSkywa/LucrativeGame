import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.interface';
import { HttpService } from 'src/app/services/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifica-avatar-profilo',
  templateUrl: './modifica-avatar-profilo.component.html',
  styleUrls: ['./modifica-avatar-profilo.component.scss']
})
export class ModificaAvatarProfiloComponent implements OnInit {

  user: User;
  avatars: string [] = [
    'avatar1.png','avatar2.png',
    'avatar3.png','avatar4.png',
    'avatar5.png','avatar6.png',
    'avatar7.png','avatar8.png',
    'avatar9.png','avatar10.png',
    'avatar11.png','avatar12.png',
    'avatar13.png','avatar14.png',
    'avatar15.png'
  ]

  constructor(private httpService: HttpService, private router:Router) {
    this.httpService.getUserLogged().subscribe(response => {
      this.user = response;
    })
  }

  changeAvatar(avatar){
    this.user.path = '/assets/users/' + avatar;
    this.httpService.updateUser(this.user).subscribe(() => {
      this.router.navigateByUrl('/modifica-profilo')
    })
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-detalii-profil',
  templateUrl: './detalii-profil.component.html',
  styleUrls: ['./detalii-profil.component.css']
})
export class DetaliiProfilComponent implements OnInit {

  user:User;
  constructor(private userService:UserService) { }

  ngOnInit() {
   this.user=this.userService.getUser();
  }

}

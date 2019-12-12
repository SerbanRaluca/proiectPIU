import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { Userservice } from '../shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed=true;
  user:string=null;

  constructor(private router:Router,private userService:Userservice) { }

  ngOnInit() {
    this.user=sessionStorage.getItem("name");
    console.log("user:"+this.user);
  }

  inregistrare() {
    this.router.navigate(['chooseRegistration']);
  }

  login() {
    this.router.navigate(['login']);
  }

  logout(){
    console.log("logout");
    sessionStorage.removeItem("name");
    this.user=sessionStorage.getItem("name");
    console.log("user:"+this.user);
  }

  candidat(){
    console.log("candidat");
    this.router.navigate(['candidat']);
  }

}

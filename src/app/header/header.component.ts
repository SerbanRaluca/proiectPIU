import {Component, OnInit, OnChanges} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../shared/user.service';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  user: string = null;

  constructor(private router: Router,
              private userService: UserService,
              iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'user',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/user.svg'));
  }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => {
      this.user = user;
      console.log("user:" + this.user);
    });
  }


  inregistrare() {
    this.router.navigate(['chooseRegistration']);
  }

  login() {
    this.router.navigate(['login']);
  }

  logout() {
    console.log("logout");
    sessionStorage.removeItem("name");
    this.user = sessionStorage.getItem("name");
    console.log("user:" + this.user);
    this.router.navigate(['']);
  }

  candidat() {
    console.log("candidat");
    this.router.navigate(['candidat']);
  }

  goToProfile() {
    this.router.navigate(['profil']);
  }

  goToStatus(){
    this.router.navigate(['status']);
  }

  goToContracte() {
    this.router.navigate(['contracte']);
  }

  goToJF() {
    this.router.navigate(['jobFavorit']);
  }

  goToFF() {
    this.router.navigate(['freelancerFavorit']);
  }

}

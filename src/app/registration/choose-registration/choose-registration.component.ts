import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-choose-registration',
  templateUrl: './choose-registration.component.html',
  styleUrls: ['./choose-registration.component.css']
})
export class ChooseRegistrationComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  inregistrareCandidat() {
    this.router.navigate(['candidatRegistration']);
  }

  inregistrareAngajat() {
    this.router.navigate(['employerRegistration']);
  }
}

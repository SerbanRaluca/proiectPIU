import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  adaugaAnunt() {
    this.router.navigate(['angajator', 'anunt']);
  }

  cautaFreelancer() {
    this.router.navigate(['angajator', 'cautare']);
  }
}

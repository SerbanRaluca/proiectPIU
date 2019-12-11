import {Component, OnInit} from '@angular/core';
import {LoginDTO} from '../shared/candidat.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDTO: LoginDTO;

  postForm: FormGroup;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.postForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      parola: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const email = this.postForm.value.email;
    const parola = this.postForm.value.parola;
    this.router.navigate(['candidat']);

  }

}

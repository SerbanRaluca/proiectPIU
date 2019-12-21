import {Component, OnInit} from '@angular/core';
import {LoginDTO} from '../shared/candidat.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDTO: LoginDTO;

  postForm: FormGroup;

  constructor(private router: Router,
              private userService:UserService) {
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

    if (email === 'moldo@gmail.com' && parola === '1234') {
      this.userService.setUser('Moldovan Cristian');
      this.router.navigate(['']);
    }

    if (email === 'raluca@gmail.com' && parola === '1234') {
      this.userService.setUser('Raluca Serban');
      this.router.navigate(['']); 
    }
  }
}

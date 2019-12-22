import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';
import { Profil } from 'src/app/shared/user.profile';

@Component({
  selector: 'app-candidat-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  postForm: FormGroup;

  constructor(private service: UserService) {
  }

  ngOnInit() {
    this.postForm = new FormGroup({
      prenume: new FormControl(null, Validators.required),
      nume: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      parola: new FormControl(null, Validators.required),
      oras: new FormControl(null, Validators.required),
      dataNasterii: new FormControl(null, Validators.required),
      varsta: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.postForm.value);
    const prenume = this.postForm.value.prenume;
    const nume = this.postForm.value.nume;
    const email = this.postForm.value.email;
    const username = this.postForm.value.username;
    const parola = this.postForm.value.parola;
    const oras = this.postForm.value.oras;
    const varsta = this.postForm.value.varsta;
    const dataNasterii = this.postForm.value.dataNasterii;
    const candidat = new User(prenume, nume, email,username, parola, oras, dataNasterii,varsta, 'CANDIDAT',new Profil("profil.png"));
    this.service.saveUser(candidat);
  }
}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CandidatService} from '../../shared/candidat.service';
import {Candidat} from '../../shared/candidat.model';

@Component({
  selector: 'app-candidat-registration',
  templateUrl: './candidat-registration.component.html',
  styleUrls: ['./candidat-registration.component.css']
})
export class CandidatRegistrationComponent implements OnInit {
  postForm: FormGroup;

  constructor(private service: CandidatService) {
  }

  ngOnInit() {
    this.postForm = new FormGroup({
      prenume: new FormControl(null, Validators.required),
      nume: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      parola: new FormControl(null, Validators.required),
      oras: new FormControl(null, Validators.required),
      dataNasterii: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.postForm.value);
    const prenume = this.postForm.value.prenume;
    const nume = this.postForm.value.nume;
    const email = this.postForm.value.email;
    const parola = this.postForm.value.parola;
    const oras = this.postForm.value.oras;
    const dataNasterii = this.postForm.value.dataNasterii;
    const candidat = new Candidat(prenume, nume, email, parola, oras, dataNasterii, 'CANDIDAT');
    this.service.saveCandidat(candidat);
  }
}

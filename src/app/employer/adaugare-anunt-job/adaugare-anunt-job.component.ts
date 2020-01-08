import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AnuntJob} from '../../shared/anuntJob.model';
import {AnuntService} from '../../shared/anunt.service';

@Component({
  selector: 'app-adaugare-anunt-job',
  templateUrl: './adaugare-anunt-job.component.html',
  styleUrls: ['./adaugare-anunt-job.component.css']
})
export class AdaugareAnuntJobComponent implements OnInit {
  postForm: FormGroup;

  rezultate: AnuntJob[];

  constructor(private anuntService: AnuntService) {
  }

  ngOnInit() {
    this.postForm = new FormGroup({
      categorie: new FormControl(null, Validators.required),
      angajator: new FormControl(null, Validators.required),
      titlu: new FormControl(null, Validators.required),
      locatie: new FormControl(null, Validators.required),
      descriere: new FormControl(null),
      salariu: new FormControl(null, Validators.required),
      nivel: new FormControl(null)
    });
    this.rezultate = this.anuntService.getJobAnunturi();
  }

  onSubmit() {
    console.log(this.postForm.value);
    const titlu = this.postForm.value.titlu;
    const angajator = this.postForm.value.angajator;
    const locatie = this.postForm.value.locatie;
    const categorie = this.postForm.value.categorie;
    if (this.postForm.value.nivel != null) {
      const nivel = this.postForm.value.nivel;
    }
    const descriere = this.postForm.value.descriere;
    const salariu = this.postForm.value.salariu;
    const anuntJob = new AnuntJob(categorie, angajator, 'bt-logo.jpg', titlu, locatie, descriere, salariu , false, false);
    this.rezultate.push(anuntJob);
  }

}

import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Anunt} from 'src/app/shared/anunt.model';
import {AnuntService} from 'src/app/shared/anunt.service';
import {AnuntJob} from '../../shared/anuntJob.model';

@Component({
  selector: 'app-adaugare-anunt',
  templateUrl: './adaugare-anunt.component.html',
  styleUrls: ['./adaugare-anunt.component.css']
})
export class AdaugareAnuntComponent implements OnInit {
  postForm: FormGroup;

  rezultate: Anunt[];
  categoryControl: FormControl;
  selectedCategory: string;

  categories: string[] = [
    'Programare',
    'Amenajari interioare',
    'Bucatari',
    'Fotograf evenimente',
    'Organizator petreceri'
  ];

  constructor(private service: AnuntService) {
  }

  ngOnInit() {
    this.postForm = new FormGroup({
      titlu: new FormControl(null, Validators.required),
      nume: new FormControl(null, Validators.required),
      locatie: new FormControl(null, Validators.required),
      descriere: new FormControl(null),
      'salariu-min': new FormControl(null, Validators.required),
    });

    this.categoryControl = new FormControl('Programare', Validators.required);

    this.rezultate = this.service.getFreelanceriAnunturi();
  }

  onSubmit() {
    console.log(this.postForm.value);
    const titlu = this.postForm.value.titlu;
    const nume = this.postForm.value.nume;
    const categorie = this.categoryControl.value;
    const locatie = this.postForm.value.locatie;
    const descriere = this.postForm.value.descriere;
    const salariu_min = this.postForm.value['salariu-min'];
    const anunt = new Anunt(titlu, nume, categorie, locatie, 'bucatar.jpg', descriere, salariu_min, false);
    this.rezultate.push(anunt);
  }

}

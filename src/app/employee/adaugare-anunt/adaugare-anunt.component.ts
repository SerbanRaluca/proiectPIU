import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Anunt} from 'src/app/shared/anunt.model';
import {AnuntService} from 'src/app/shared/anunt.service';
import {AnuntJob} from '../../shared/anuntJob.model';
import { MatDialog } from '@angular/material';
import { MesajInformareComponent } from 'src/app/mesaj-informare/mesaj-informare.component';

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
    'Organizator evenimente'
  ];

  constructor(private service: AnuntService,private dialog:MatDialog) {
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
    const anunt = new Anunt(titlu, nume, categorie, locatie, 'petreceri.jpg', descriere, salariu_min, false, false);
    this.rezultate.push(anunt);
    this.postForm.reset();
    this.dialog.open(MesajInformareComponent, {
      width: '400px',
      height: '300px',
      position: { top: '2%', left: '30%' },
      data:'Anunțul a fost postat cu succes!'
    });
  }

}

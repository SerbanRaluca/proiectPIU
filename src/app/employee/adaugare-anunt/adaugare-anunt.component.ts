import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Anunt } from 'src/app/shared/anunt.model';
import { AnuntService } from 'src/app/shared/anunt.service';

@Component({
  selector: 'app-adaugare-anunt',
  templateUrl: './adaugare-anunt.component.html',
  styleUrls: ['./adaugare-anunt.component.css']
})
export class AdaugareAnuntComponent implements OnInit {
  postForm:FormGroup;

  constructor(private service:AnuntService) { }

  ngOnInit() {
    this.postForm=new FormGroup({
      'titlu':new FormControl(null,Validators.required),
      'nume':new FormControl(null,Validators.required),
      'locatie':new FormControl(null,Validators.required),
      'descriere':new FormControl(null),
      'salariu-min':new FormControl(null,Validators.required),
      'salariu-max':new FormControl(null,Validators.required)
    });
  }

  onSubmit(){
    console.log(this.postForm.value);
    let titlu=this.postForm.value['titlu'];
    let nume=this.postForm.value['nume'];
    let locatie=this.postForm.value['locatie'];
    let descriere=this.postForm.value['descriere'];
    let salariu_min=this.postForm.value['salariu-min'];
    let salariu_max=this.postForm.value['salariu-max'];
    const anunt=new Anunt(titlu,nume,locatie,descriere,salariu_min,salariu_max);
    this.service.saveAnunt(anunt);
  }

}

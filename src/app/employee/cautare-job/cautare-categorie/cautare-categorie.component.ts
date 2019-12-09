import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AnuntJob } from 'src/app/shared/anuntJob.model';

@Component({
  selector: 'app-cautare-categorie',
  templateUrl: './cautare-categorie.component.html',
  styleUrls: ['./cautare-categorie.component.css']
})
export class CautareCategorieComponent implements OnInit {
  categories:String[]=[
    'All',
    'Programare',
    'Amenajari interioare',
    'Bucatari',
    'Fotograf evenimente',
    'Organizator petreceri'
  ];

  anunturiJob:AnuntJob[]=[
    new AnuntJob(
      "Programare",
      "Banca Transilvania",
      "Senior Android Developer",
      "Cluj-Napoca",
      "Mobile first. Innovation. Disruption. Continuous optimization. Customer centricity.If you believe those terms define today’s mobile ecosystem, we would like to have you in our team at Banca Transilvania.",
       3000)
  ];

  selectedCategory: String;
  categoryControl:FormControl;
  constructor() { }

  ngOnInit() {
    this.categoryControl = new FormControl('', Validators.required);
  }

  cauta(){
    this.selectedCategory=this.categoryControl.value;
    console.log(this.selectedCategory);
    let anunturi:AnuntJob[];
    anunturi=this.anunturiJob.filter(a=>a.categorie===this.selectedCategory);
    console.log(anunturi);
  }

}

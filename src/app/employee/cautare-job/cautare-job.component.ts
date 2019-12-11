import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, Validators } from '@angular/forms';
import { AnuntJob } from 'src/app/shared/anuntJob.model';

export interface Tile {
  type:string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-cautare-job',
  templateUrl: './cautare-job.component.html',
  styleUrls: ['./cautare-job.component.css']
})
export class CautareJobComponent implements OnInit {

   categories:string[]=[
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
      "bt_logo.jpg",
      "Senior Android Developer",
      "Cluj-Napoca",
      "Mobile first. Innovation. Disruption. Continuous optimization. Customer centricity.If you believe those terms define today’s mobile ecosystem, we would like to have you in our team at Banca Transilvania.",
       3000),
       new AnuntJob(
         "Programare",
         "Banca Transilvania",
         "bt_logo.jpg",
         "Mid/Senior BI Developer ",
         "Cluj-Napoca",
         "Mobile first. Innovation. Disruption. Continuous optimization. Customer centricity.If you believe those terms define today’s mobile ecosystem, we would like to have you in our team at Banca Transilvania.",
         4000),
         new AnuntJob(
          "Programare",
          "Banca Transilvania",
          "bt_logo.jpg",
          "Storage & Backup Engineer",
          "Cluj-Napoca",
          "Mobile first. Innovation. Disruption. Continuous optimization. Customer centricity.If you believe those terms define today’s mobile ecosystem, we would like to have you in our team at Banca Transilvania.",
          4000),
          new AnuntJob(
            "Programare",
            "Banca Transilvania",
            "bt_logo.jpg",
            "Mid/ Senior QA Automation Engineer ",
            "Cluj-Napoca",
            "Mobile first. Innovation. Disruption. Continuous optimization. Customer centricity.If you believe those terms define today’s mobile ecosystem, we would like to have you in our team at Banca Transilvania.",
            4000)

  ];

  rezultate:AnuntJob[];

  selectedCategory: string;
  categoryControl:FormControl;

  tiles: Tile[] = [
    {type:"category",cols: 2, rows: 2},
    {type:"results",cols: 6, rows: 4}
  ];

  ngOnInit() {
    this.categoryControl = new FormControl('All', Validators.required);
    this.rezultate=this.anunturiJob;
  }

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon(
      "microphone",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/images/radio-microphone.svg")
    );
   }

  cauta(){
    this.selectedCategory=this.categoryControl.value;
    console.log(this.selectedCategory);
    if(this.selectedCategory=="All"){
      this.rezultate=this.anunturiJob;
    }else{
      this.rezultate=this.anunturiJob.filter(a=>a.categorie===this.selectedCategory);
    }
    console.log(this.rezultate);
  }


}

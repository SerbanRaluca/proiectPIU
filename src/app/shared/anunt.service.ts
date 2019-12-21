import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Anunt } from './anunt.model';
import { AnuntJob } from './anuntJob.model';

@Injectable({
    providedIn: 'root'
})
export class AnuntService{
  anunturiJob: AnuntJob[] = [
    new AnuntJob(
      "Programare",
      "Banca Transilvania",
      "bt-logo.jpg",
      "Senior Android Developer",
      "Cluj-Napoca",
      "Mobile first. Innovation. Disruption. Continuous optimization. Customer centricity.If you believe those terms define today’s mobile ecosystem, we would like to have you in our team at Banca Transilvania.",
      3000,
      false),
    new AnuntJob(
      "Programare",
      "Banca Transilvania",
      "bt-logo.jpg",
      "Mid/Senior BI Developer ",
      "Cluj-Napoca",
      "Mobile first. Innovation. Disruption. Continuous optimization. Customer centricity.If you believe those terms define today’s mobile ecosystem, we would like to have you in our team at Banca Transilvania.",
      4000,
      false,
      "Middle (2-5 years), Senior (5-10 years)"),
    new AnuntJob(
      "Programare",
      "Banca Transilvania",
      "bt-logo.jpg",
      "Storage & Backup Engineer",
      "Cluj-Napoca",
      "Mobile first. Innovation. Disruption. Continuous optimization. Customer centricity.If you believe those terms define today’s mobile ecosystem, we would like to have you in our team at Banca Transilvania.",
      4000,
      false),
    new AnuntJob(
      "Programare",
      "Banca Transilvania",
      "bt-logo.jpg",
      "Mid/ Senior QA Automation Engineer ",
      "Cluj-Napoca",
      "Mobile first. Innovation. Disruption. Continuous optimization. Customer centricity.If you believe those terms define today’s mobile ecosystem, we would like to have you in our team at Banca Transilvania.",
      4000,
      false),
    new AnuntJob(
      "Vanzari",
      "Carrefour Romania",
      "Carrefour-logo.jpg",
      "Asistent Decorari, Asistent Vanzari, Casier",
      "Targu-Mures",
      "Intra acum in Lumea Carrefour! E mai mult! E despre oameni!",
      400,
      false),
    new AnuntJob(
      "Vanzari",
      "Pepco",
      "pepco-logo.jpg",
      "Casier",
      "Sibiu",
      "Intra acum in Lumea Pepco! E mai mult! E despre oameni!",
      400,
      false)
  ];


    private anunturiCandidat:Anunt[]=[];

    constructor(private http: HttpClient){}

    getJobAnunturi(){
      return this.anunturiJob;
    }

    saveAnunt(anunt:Anunt){
        this.http
        .post(
          'https://proiect-piu-47612.firebaseio.com/anunturi.json',
           anunt
        )
        .subscribe(data => {
          console.log(data);
        });
    }



}
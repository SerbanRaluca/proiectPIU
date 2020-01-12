import { AnuntJob } from './anuntJob.model';
import { Injectable } from '@angular/core';

@Injectable(
    {providedIn:'root'}
)
export class StatusService{
    // Hardcodare lista de rezultate
    rezultateContracte:AnuntJob[] = [
        new AnuntJob(
          'Programare',
          'Banca Transilvania',
          'bt-logo.jpg',
          'Senior Android Developer',
          'Cluj-Napoca',
          'Mobile first. Innovation. Disruption. Continuous optimization. Customer centricity.If you believe those ' +
          'terms define today’s mobile ecosystem, we would like to have you in our team at Banca Transilvania.',
          3000,
          false,
          false,
          "",
          "TRIMIS"),
        new AnuntJob(
          'Programare',
          'AROBS Transilvania Software',
          'arobs.png',
          '.NET Developer ',
          'Cluj-Napoca',
          'We are looking for a highly talented .Net developer to join our technical team.',
          4000,
          false,
          false,
          'Middle (2-5 years), Senior (5-10 years)',
          "ACCEPTAT"),
        new AnuntJob(
            'Programare',
            'Kaufland',
            'kaufland.jpg',
            'Lucrator comercial',
            'Cluj-Napoca',
            'Suntem o companie internațională din industria de retail, care pune accent pe dinamism, performanță și corectitudine. Împreună formăm o echipă puternică, în care fiecare angajat contribuie la succesul nostru. Locul tău e la Kaufland!.',
            1000,
            false,
            false,
            "",
            "FINALIZAT")
      ];

      getStatusContracte(){
          return this.rezultateContracte;
      }

      addStatusContracte(job:AnuntJob ){
          this.rezultateContracte.push(job);
      }
}
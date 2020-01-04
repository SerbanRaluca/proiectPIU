import {Component, Input, OnInit} from '@angular/core';
import { AnuntJob } from '../shared/anuntJob.model';

@Component({
  selector: 'app-user-contracte',
  templateUrl: './user-contracte.component.html',
  styleUrls: ['./user-contracte.component.css']
})
export class UserContracteComponent implements OnInit {

  @Input() rezultateContracte: AnuntJob[];

  constructor() { 
    // Hardcodare lista de rezultate
    this.rezultateContracte = [
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
        "",
        "TRIMIS"),
      new AnuntJob(
        'Programare',
        'Banca Transilvania',
        'bt-logo.jpg',
        'Mid/Senior BI Developer ',
        'Cluj-Napoca',
        'Mobile first. Innovation. Disruption. Continuous optimization. Customer centricity.If you believe those ' +
        'terms define today’s mobile ecosystem, we would like to have you in our team at Banca Transilvania.',
        4000,
        false,
        'Middle (2-5 years), Senior (5-10 years)',
        "ACCEPTAT"),
      new AnuntJob(
          'Programare',
          'Banca Transilvania',
          'bt-logo.jpg',
          'Mid/ Senior QA Automation Engineer ',
          'Cluj-Napoca',
          'Mobile first. Innovation. Disruption. Continuous optimization. Customer centricity.If you believe those ' +
          'terms define today’s mobile ecosystem, we would like to have you in our team at Banca Transilvania.',
          4000,
          false,
          "",
          "FINALIZAT")
    ];

  }

  ngOnInit() {
    console.log("Afisare rezultate complete");
    console.log(this.rezultateContracte);
  }
}

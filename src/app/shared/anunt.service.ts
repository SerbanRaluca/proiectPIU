import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Anunt} from './anunt.model';
import {AnuntJob} from './anuntJob.model';

@Injectable({
  providedIn: 'root'
})
export class AnuntService {
  anunturiJob: AnuntJob[] = [
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
      false),
    new AnuntJob(
      'Bucatari',
      'Restaurant Zama',
      'bucatar2.jpg',
      'Bucatar',
      'Cluj-Napoca',
      'Angajăm bucătar cu o minimă experiență în domeniu.',
       1000,
      false,
      false),
    new AnuntJob(
      'Amenajari interioare',
      'Filimon Nicolae',
      'amenajari-interioare.jpg',
      'Muncitor amenajări interioare',
      'Sibiu',
      'Angajez muncitor amenajări interioare. Necesită deplasare .Se asigură salariu corespunzător cazare si diurnă pe perioada deplasărilor.',
      2000,
      false,
      false),
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
      false),
    new AnuntJob(
      'Vanzari',
      'Carrefour Romania',
      'Carrefour-logo.jpg',
      'Asistent Decorari, Asistent Vanzari, Casier',
      'Târgu-Mureș',
      'Intra acum in Lumea Carrefour! E mai mult! E despre oameni!',
      400,
      false,
      false),
    new AnuntJob(
      'Vanzari',
      'Pepco',
      'pepco-logo.jpg',
      'Casier',
      'Sibiu',
      'Intra acum in Lumea Pepco! E mai mult! E despre oameni!',
      400,
      false,
      false)
  ];

  anunturiFreelancer: Anunt[] = [
    new Anunt(
      'Bucatar',
      'Simion Ionut',
      'Bucatari',
      'Sibiu',
      'bucatar.jpg',
      'Lucrez ca si bucatar de 2 ani de zile. Daca aveti un eveniment la care doriti sa aveti ' +
      'un bucatar cu experienta eu sunt cel pe care il cautati',
      300,
      false,
      false),
    new Anunt(
      'Fotograf profesionist',
      'Ceuca Vlad',
      'Fotograf evenimente',
      'Cluj-Napoca',
      'aparatfoto.jpg',
      'Eu sunt cel pe care il cauti',
      50,
      false,
      false),
    new Anunt(
      'Programator Junior Android',
      'Moldovan Cristian',
      'Programare',
      'Cluj-Napoca',
      'cristi.jpg',
      'Am absolvit facultatea de Calculatoare anul acesta și sunt pregătit pentru o nouă provocare.',
      500,
      false,
      false
    )];

  jobFav: AnuntJob[] = [];
  freelancerFav: Anunt[] = [];

  constructor(private http: HttpClient) {
  }

  getFreelanceriAnunturi() {
    return this.anunturiFreelancer;
  }

  getJobAnunturi() {
    return this.anunturiJob;
  }

  getJobFav() {
    return this.jobFav;
  }

  getFreelancerFav() {
    return this.freelancerFav;
  }

  saveAnunt(anunt: Anunt) {
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

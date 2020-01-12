import {Injectable} from '@angular/core';
import {Contracte, ContracteJob} from './contracte.model';

@Injectable({
  providedIn: 'root'
})
export class ContracteService {
  contracteLista: Contracte[] = [
    new Contracte(
      'Fotograf profesionist',
      'Ceuca Vlad',
      'aparatfoto.jpg',
      'Incheiat'
    ),
    new Contracte('Bucatar',
      'Simion Ionut',
      'bucatar.jpg',
      'In desfasurare')
  ];

  contracteJob: ContracteJob[] = [
    new Contracte(
      'Senior Android Developer',
      'Banca Transilvania',
      'bt-logo.jpg',
      'In desfasurare'
    ),
    new Contracte(
      'Mid/ Senior QA Automation Engineer',
      'Banca Transilvania',
      'bt-logo.jpg',
      'Incheiat'
    )
  ];

  constructor() {
  }

  getContracteLista() {
    return this.contracteLista;
  }

  getContracteJob(){
    return this.contracteJob;
  }
}

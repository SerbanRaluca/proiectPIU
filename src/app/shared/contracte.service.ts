import {Injectable} from '@angular/core';
import {Contracte} from './contracte.model';

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

  constructor() {
  }

  getContracteLista() {
    return this.contracteLista;
  }
}

import {Injectable} from '@angular/core';
import {Candidat} from './candidat.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http: HttpClient) {
  }

  saveCandidat(candidat: Candidat) {
    this.http
      .post('https://test-cf87a.firebaseio.com/candidat.json', candidat)
      .subscribe(data => {
        console.log(data);
      });
  }


}

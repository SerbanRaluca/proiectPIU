import {Injectable} from '@angular/core';
import {Review} from './review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  reviewLista: Review[] = [
    new Review(
      'Raluca Serban',
      'Simion Ionut',
      'Angajat pentru un eveniment',
      'Profesionalitate 100%, Mancare buna',
      4
    )
  ];

  constructor() {
  }

  getReviews(){
    return this.reviewLista;
  }
}

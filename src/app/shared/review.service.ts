import {Injectable} from '@angular/core';
import {Review, ReviewJob} from './review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  reviewLista: Review[] = [
    new Review(
      'Moldovan Cristian',
      'cristi.jpg',
      'Simion Ionut',
      'Angajat pentru un eveniment',
      'Profesionalitate 100%, Mancare buna',
      4,
      new Date('15 September 2019')
    ),
    new Review(
      'Serban Raluca',
      'serban_raluca.JPG',
      'Ceuca Vlad',
      'PhotoShooting',
      'Omul face poze superbe',
      5,
      new Date('18 November 2019')
    ),
    new Review(
      'Morariu Andrei',
      'om1.jpg',
      'Simion Ionut',
      'Botez',
      'Mancare gatita bine si la timp',
      4,
      new Date('13 November 2019')
    ),
    new Review(
      'Dancila Viorica',
      'om2.jpg',
      'Simion Ionut',
      'Zi de naster',
      'Totul a fost ca la carte',
      5,
      new Date('13 July 2019')
    )
  ];

  reviewJob: ReviewJob[] = [
    new ReviewJob(
      'Moldovan Cristian',
      'cristi.jpg',
      'Banca Transilvania',
      'Programator full time Android',
      'Firma serioasa',
      4,
      new Date('12 July 2019')
    )
  ]

  constructor() {
  }

  getReviews() {
    return this.reviewLista;
  }

  getReviewsJob() {
    return this.reviewJob;
  }
}

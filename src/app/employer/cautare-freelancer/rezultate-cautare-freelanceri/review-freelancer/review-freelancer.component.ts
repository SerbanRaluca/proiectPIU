import {Component, Inject, OnInit} from '@angular/core';
import {Review} from '../../../../shared/review.model';
import {ReviewService} from '../../../../shared/review.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Anunt} from '../../../../shared/anunt.model';
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-review-freelancer',
  templateUrl: './review-freelancer.component.html',
  styleUrls: ['./review-freelancer.component.css']
})
export class ReviewFreelancerComponent implements OnInit {
  reviews: Review[];
  rate: number;

  constructor(public reviewService: ReviewService,
              config: NgbRatingConfig,
              @Inject(MAT_DIALOG_DATA) public data: Anunt) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit() {
    this.reviews = this.reviewService.getReviews().filter(a => a.numeFreelancer === this.data.nume);
    console.log(this.reviews);
  }

}

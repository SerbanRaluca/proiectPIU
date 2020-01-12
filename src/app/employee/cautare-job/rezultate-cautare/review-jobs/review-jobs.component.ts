import {Component, Inject, OnInit} from '@angular/core';
import {Review, ReviewJob} from "../../../../shared/review.model";
import {ReviewService} from "../../../../shared/review.service";
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Anunt} from "../../../../shared/anunt.model";
import {AnuntJob} from "../../../../shared/anuntJob.model";

@Component({
  selector: 'app-review-jobs',
  templateUrl: './review-jobs.component.html',
  styleUrls: ['./review-jobs.component.css']
})
export class ReviewJobsComponent implements OnInit {

  reviews: ReviewJob[];
  rate: number;

  constructor(public reviewService: ReviewService,
              config: NgbRatingConfig,
              @Inject(MAT_DIALOG_DATA) public data: AnuntJob) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit() {
    this.reviews = this.reviewService.getReviewsJob().filter(a => a.numeJob === this.data.angajator);
    console.log(this.reviews);
  }

}

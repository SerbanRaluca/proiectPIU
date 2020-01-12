import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Review, ReviewJob} from "../../../shared/review.model";
import {ReviewService} from "../../../shared/review.service";
import {ToastrService} from "ngx-toastr";
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Contracte} from "../../../shared/contracte.model";

@Component({
  selector: 'app-review-job',
  templateUrl: './review-job.component.html',
  styleUrls: ['./review-job.component.css']
})
export class ReviewJobComponent implements OnInit {
  postForm: FormGroup;
  reviewLista: ReviewJob[];
  currentRate = 1;

  constructor(public reviewService: ReviewService,
              public toastr: ToastrService,
              config: NgbRatingConfig,
              public dialogRef: MatDialogRef<ReviewJobComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Contracte) {
    config.max = 5;
  }

  ngOnInit() {
    this.reviewLista = this.reviewService.getReviewsJob();

    this.postForm = new FormGroup({
      numeAngajator: new FormControl(null, Validators.required),
      detaliiJob: new FormControl(null),
      review: new FormControl(null, Validators.required),
    });
  }


  onSubmit() {
    console.log(this.postForm.value);
    const numeAngajator = this.postForm.value.numeAngajator;
    const detaliiJob = this.postForm.value.detaliiJob;
    const review = this.postForm.value.review;
    this.toastr.success('Review postat cu succes', 'Review Post');
    const reviewObj = new ReviewJob(numeAngajator, 'serban_raluca.JPG',
      this.data.nume,
      detaliiJob, review, this.currentRate, new Date(Date.now()));
    this.reviewLista.push(reviewObj);
    console.log(this.reviewLista);
  }

}

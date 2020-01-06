import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AnuntJob} from '../../../shared/anuntJob.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Review} from '../../../shared/review.model';
import {ReviewService} from '../../../shared/review.service';
import {Contracte} from '../../../shared/contracte.model';
import {Anunt} from "../../../shared/anunt.model";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  postForm: FormGroup;
  reviewLista: Review[];

  constructor(public reviewService: ReviewService,
              public dialogRef: MatDialogRef<ReviewComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Contracte) {
  }

  ngOnInit() {
    this.reviewLista = this.reviewService.getReviews();

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
    const reviewObj = new Review(numeAngajator, 'RalucaSerban', detaliiJob, review, 5);
    this.reviewLista.push(reviewObj);
  }
}

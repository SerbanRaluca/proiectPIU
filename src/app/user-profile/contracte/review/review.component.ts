import {Component, Inject, OnInit, TemplateRef} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Review} from '../../../shared/review.model';
import {ReviewService} from '../../../shared/review.service';
import {Contracte} from '../../../shared/contracte.model';
import {ToastrService} from 'ngx-toastr';
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  postForm: FormGroup;
  reviewLista: Review[];
  currentRate = 1;

  constructor(public reviewService: ReviewService,
              public toastr: ToastrService,
              config: NgbRatingConfig,
              public dialogRef: MatDialogRef<ReviewComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Contracte) {
    config.max = 5;
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
    this.toastr.success('Review postat cu succes', 'Review Post');
    const reviewObj = new Review(numeAngajator, 'serban_raluca.JPG',
      this.data.nume,
      detaliiJob, review, this.currentRate, new Date(Date.now()));
    this.reviewLista.push(reviewObj);
    console.log(this.reviewLista);
  }
}

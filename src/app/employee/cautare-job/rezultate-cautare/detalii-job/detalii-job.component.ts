import {Component, OnInit, Inject, EventEmitter, Output, Input} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatIconRegistry} from '@angular/material';
import {AnuntJob} from 'src/app/shared/anuntJob.model';
import {DomSanitizer} from '@angular/platform-browser';
import {AnuntService} from '../../../../shared/anunt.service';
import {ToastrService} from 'ngx-toastr';
import {Review, ReviewJob} from "../../../../shared/review.model";
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {ReviewService} from "../../../../shared/review.service";


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-detalii-job',
  templateUrl: './detalii-job.component.html',
  styleUrls: ['./detalii-job.component.css']
})
export class DetaliiJobComponent implements OnInit {
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  jobFav: AnuntJob[];
  reviews: ReviewJob[];
  sumRating = 0;
  index = 0;

  constructor(
    public toastr: ToastrService,
    config: NgbRatingConfig,
    public reviewService: ReviewService,
    public anuntService: AnuntService,
    public dialogRef: MatDialogRef<DetaliiJobComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AnuntJob,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'location',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/location.svg'));
    iconRegistry.addSvgIcon(
      'briefcase',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/briefcase.svg'));
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit() {
    this.jobFav = this.anuntService.jobFav;
    this.selected = this.data.favorit;
    this.reviews = this.reviewService.getReviewsJob().filter(a => a.numeJob === this.data.angajator);
    this.reviews.forEach( review => {
      this.sumRating = this.sumRating + review.rating;
      this.index = this.index + 1;
    });
    this.sumRating = this.sumRating / this.index;
    this.selected = this.data.favorit;
    console.log(this.data);
  }

  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
    if (this.selected) {
      this.toastr.success('Job adăugat la favorite', 'Adăugare la favorite');
      this.data.favorit = true;
      this.jobFav.push(new AnuntJob(this.data.categorie, this.data.angajator, this.data.logo,
        this.data.titlu, this.data.locatie, this.data.descriere, this.data.salariu, this.data.aplied, this.data.favorit,
        this.data.nivel));
      console.log(this.jobFav);
    }

    if (!this.selected) {
      this.toastr.warning('Job șters de la favorite', 'Ștergere de la favorite');
      this.data.favorit = false;
      const index = this.jobFav.indexOf(this.data);
      this.jobFav.splice(index, 1);
      console.log(this.jobFav);
    }
  }

  aplica(){
    this.data.aplied=true;
  }

}

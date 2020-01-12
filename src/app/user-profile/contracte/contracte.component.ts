import {Component, OnInit} from '@angular/core';
import {Contracte} from '../../shared/contracte.model';
import {ContracteService} from '../../shared/contracte.service';
import {MatDialog} from '@angular/material/dialog';
import {ReviewComponent} from "./review/review.component";
import {Review} from "../../shared/review.model";
import {ReviewService} from "../../shared/review.service";
import {PlataComponent} from "./plata/plata.component";

@Component({
  selector: 'app-contracte',
  templateUrl: './contracte.component.html',
  styleUrls: ['./contracte.component.css']
})
export class ContracteComponent implements OnInit {

  contracte: Contracte[];
  review: Review[];

  constructor(public contracteService: ContracteService, public dialog: MatDialog,
              public reviewService: ReviewService) {
  }

  ngOnInit() {
    this.contracte = this.contracteService.getContracteLista();
  }

  onReview(rez: Contracte) {
    const dialogRef = this.dialog.open(ReviewComponent, {
      width: '800px',
      height: '700px',
      position: {top: '2%', left: '30%'},
      data: rez
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(this.reviewService.getReviews());
      console.log('dialog closed');
    });
  }

  onPlata(rez: Contracte) {
    const dialogRef = this.dialog.open(PlataComponent, {
      width: '650px',
      height: '450px',
      position: {top: '2%', left: '30%'},
      data: rez
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(this.reviewService.getReviews());
      console.log('dialog closed');
    });
  }

}
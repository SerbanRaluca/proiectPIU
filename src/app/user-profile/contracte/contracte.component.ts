import {Component, OnInit} from '@angular/core';
import {Contracte} from '../../shared/contracte.model';
import {ContracteService} from '../../shared/contracte.service';
import {MatDialog} from '@angular/material/dialog';
import {DetaliiJobComponent} from "../../employee/cautare-job/rezultate-cautare/detalii-job/detalii-job.component";
import {JobApplication} from "../../shared/job-application.model";
import {ReviewComponent} from "./review/review.component";

@Component({
  selector: 'app-contracte',
  templateUrl: './contracte.component.html',
  styleUrls: ['./contracte.component.css']
})
export class ContracteComponent implements OnInit {

  contracte: Contracte[];

  constructor(public contracteService: ContracteService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.contracte = this.contracteService.getContracteLista();
  }

  onReview(rez: Contracte) {
    const dialogRef = this.dialog.open(ReviewComponent, {
      width: '800px',
      height: '800px',
      position: {top: '2%', left: '30%'},
      data: rez
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed');
    });
  }

}

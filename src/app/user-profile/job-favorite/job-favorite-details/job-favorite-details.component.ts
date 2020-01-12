import {Component, Inject, OnInit} from '@angular/core';
import {AnuntJob} from "../../../shared/anuntJob.model";
import {DetaliiJobComponent} from "../../../employee/cautare-job/rezultate-cautare/detalii-job/detalii-job.component";
import {JobApplication} from "../../../shared/job-application.model";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-job-favorite-details',
  templateUrl: './job-favorite-details.component.html',
  styleUrls: ['./job-favorite-details.component.css']
})
export class JobFavoriteDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DetaliiJobComponent>,
              @Inject(MAT_DIALOG_DATA) public data: AnuntJob,
              iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'location',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/location.svg'));
    iconRegistry.addSvgIcon(
      'briefcase',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/briefcase.svg'));
  }

  ngOnInit() {
  }

}

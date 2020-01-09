import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DetaliiJobComponent} from "../../../employee/cautare-job/rezultate-cautare/detalii-job/detalii-job.component";
import {AnuntJob} from "../../../shared/anuntJob.model";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-freelancer-favorit-details',
  templateUrl: './freelancer-favorit-details.component.html',
  styleUrls: ['./freelancer-favorit-details.component.css']
})
export class FreelancerFavoritDetailsComponent implements OnInit {

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

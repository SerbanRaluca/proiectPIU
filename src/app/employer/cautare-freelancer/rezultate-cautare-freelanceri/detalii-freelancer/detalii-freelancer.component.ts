import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Anunt} from '../../../../shared/anunt.model';
import {Review} from "../../../../shared/review.model";
import {ReviewService} from "../../../../shared/review.service";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-detalii-freelancer',
  templateUrl: './detalii-freelancer.component.html',
  styleUrls: ['./detalii-freelancer.component.css']
})
export class DetaliiFreelancerComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<DetaliiFreelancerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Anunt,
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

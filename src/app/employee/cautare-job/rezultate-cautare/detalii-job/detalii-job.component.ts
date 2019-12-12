import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatIconRegistry } from '@angular/material';
import { AnuntJob } from 'src/app/shared/anuntJob.model';
import { DomSanitizer } from '@angular/platform-browser';


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

  constructor(
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
  }

  ngOnInit() {
  }

}

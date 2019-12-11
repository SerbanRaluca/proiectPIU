import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cautare-job',
  templateUrl: './cautare-job.component.html',
  styleUrls: ['./cautare-job.component.css']
})
export class CautareJobComponent implements OnInit {
 
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon(
      "microphone",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/images/radio-microphone.svg")
    );
   }

  ngOnInit() {
  }

}

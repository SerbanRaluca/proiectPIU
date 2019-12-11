import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cautare-freelancer',
  templateUrl: './cautare-freelancer.component.html',
  styleUrls: ['./cautare-freelancer.component.css']
})
export class CautareFreelancerComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private router: Router) {
    this.matIconRegistry.addSvgIcon(
      'microphone',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/radio-microphone.svg')
    );
  }

  ngOnInit() {
  }

}

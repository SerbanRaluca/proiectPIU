import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {AnuntJob} from '../../shared/anuntJob.model';
import {FormControl, Validators} from '@angular/forms';
import {Tile} from '../../employee/cautare-job/cautare-job.component';
import {Anunt} from '../../shared/anunt.model';
import {AnuntService} from '../../shared/anunt.service';

@Component({
  selector: 'app-cautare-freelancer',
  templateUrl: './cautare-freelancer.component.html',
  styleUrls: ['./cautare-freelancer.component.css']
})
export class CautareFreelancerComponent implements OnInit {

  rezultate: Anunt[];

  selectedCategory: string;
  categoryControl: FormControl;

  categories: string[] = [
    'All',
    'Programare',
    'Amenajari interioare',
    'Bucatari',
    'Fotograf evenimente',
    'Organizator petreceri'
  ];

  tiles: Tile[] = [
    {type: 'category', cols: 2, rows: 2},
    {type: 'results', cols: 6, rows: 4}
  ];

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private anuntService: AnuntService) {
    this.matIconRegistry.addSvgIcon(
      'microphone',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/radio-microphone.svg')
    );
  }

  ngOnInit() {
    this.categoryControl = new FormControl('All', Validators.required);
    this.rezultate = this.anuntService.getFreelanceriAnunturi();
  }

  cauta() {
    this.selectedCategory = this.categoryControl.value;
    console.log(this.selectedCategory);
    if (this.selectedCategory === 'All') {
      this.rezultate = this.anuntService.getFreelanceriAnunturi();
    } else {
      this.rezultate = this.anuntService.getFreelanceriAnunturi().filter(a => a.categorie === this.selectedCategory);
    }
    console.log(this.rezultate);
  }

}

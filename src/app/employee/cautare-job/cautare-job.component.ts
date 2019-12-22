import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {FormControl, Validators} from '@angular/forms';
import {AnuntJob} from 'src/app/shared/anuntJob.model';
import {AnuntService} from 'src/app/shared/anunt.service';

export interface Tile {
  type: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-cautare-job',
  templateUrl: './cautare-job.component.html',
  styleUrls: ['./cautare-job.component.css']
})
export class CautareJobComponent implements OnInit {

  rezultate: AnuntJob[];

  categories:string[]=[
    'All',
    'Programare',
    'Amenajari interioare',
    'Bucatari',
    'Vanzari',
    'Fotograf evenimente',
    'Organizator petreceri'
  ];

  selectedCategory: string;
  categoryControl: FormControl;

  tiles: Tile[] = [
    {type: 'category', cols: 2, rows: 2},
    {type: 'results', cols: 6, rows: 4}
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private anuntService: AnuntService
  ) {
    this.matIconRegistry.addSvgIcon(
      'microphone',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/radio-microphone.svg')
    );
  }

  ngOnInit() {
    this.categoryControl = new FormControl('All', Validators.required);
    this.rezultate = this.anuntService.getJobAnunturi();
  }

  cauta() {
    this.selectedCategory = this.categoryControl.value;
    console.log(this.selectedCategory);
    if (this.selectedCategory === 'All') {
      this.rezultate = this.anuntService.getJobAnunturi();
    } else {
      this.rezultate = this.anuntService.getJobAnunturi().filter(a => a.categorie === this.selectedCategory);
    }
    console.log(this.rezultate);
  }

}

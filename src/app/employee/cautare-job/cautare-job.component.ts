import { Component, OnInit } from '@angular/core';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, Validators } from '@angular/forms';
import { AnuntJob } from 'src/app/shared/anuntJob.model';
import { AnuntService } from 'src/app/shared/anunt.service';
import { DateCautare } from 'src/app/shared/dateCautare.model';
import { ConfirmareCautareComponent } from '../../confirmare-cautare/confirmare-cautare.component';
import { AsistentaAudioComponent } from 'src/app/asisienta-audio/asisienta-audio.component';

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

  categories: string[] = [
    'Toate categoriile',
    'Programare',
    'Amenajari interioare',
    'Bucatari',
    'Vanzari',
    'Fotograf evenimente',
    'Organizator petreceri'
  ];

  locations: String[] = [
    'Toate locațiile',
    "Cluj-Napoca",
    "Târgu-Mureș",
    "Sibiu",
    "Brașov",
    "București",
    "Timișoara"
  ]

  selectedCategory: string = 'Toate categoriile';
  selectedLocation: string = 'Toate locațiile';
  categoryControl: FormControl;
  locationControl: FormControl;

  tiles: Tile[] = [
    { type: 'category', cols: 2, rows: 2 },
    { type: 'results', cols: 6, rows: 4 }
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private anuntService: AnuntService,
    public dialog: MatDialog
  ) {
    this.matIconRegistry.addSvgIcon(
      'microphone',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/radio-microphone.svg')
    );
  }

  ngOnInit() {
    this.categoryControl = new FormControl('Toate categoriile', Validators.required);
    this.locationControl = new FormControl('Toate locațiile', Validators.required);
    this.rezultate = this.anuntService.getJobAnunturi();
  }

  cauta() {
    this.selectedCategory = this.categoryControl.value;
    this.selectedLocation = this.locationControl.value;
    console.log(this.selectedCategory);
    console.log(this.selectedLocation);
    const dateCautare = new DateCautare(this.selectedCategory, this.selectedLocation, false);
    const dialogRef = this.dialog.open(ConfirmareCautareComponent, {
      width: '500px',
      height: '500px',
      position: { top: '2%', left: '30%' },
      data: dateCautare
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed');
      if (result.confirmed) {
        if (result.categorie === 'Toate categoriile') {
          this.rezultate = this.anuntService.getJobAnunturi();
        } else {
          this.rezultate = this.anuntService.getJobAnunturi().filter(a => a.categorie === result.categorie);
        }

        if (result.locatie != 'Toate locațiile') {
          this.rezultate = this.rezultate.filter(a => a.locatie === result.locatie);
        }
        this.selectedCategory = result.categorie;
        this.selectedLocation = result.locatie;
        console.log(this.rezultate);
      }
    });

  }

  audio() {
    const dateCautare = new DateCautare(this.selectedCategory, this.selectedLocation, false);
    const dialogRef = this.dialog.open(AsistentaAudioComponent, {
      width: '500px',
      height: '500px',
      position: { top: '2%', left: '30%' },
      data: dateCautare
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed');
      if (result.confirmed) {
        this.selectedCategory = result.categorie;
        this.selectedLocation = result.locatie;
      }
    });
  }
}

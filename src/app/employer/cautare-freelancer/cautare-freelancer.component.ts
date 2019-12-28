import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AnuntJob } from '../../shared/anuntJob.model';
import { FormControl, Validators } from '@angular/forms';
import { Tile } from '../../employee/cautare-job/cautare-job.component';
import { Anunt } from '../../shared/anunt.model';
import { AnuntService } from '../../shared/anunt.service';
import { DateCautare } from 'src/app/shared/dateCautare.model';
import { ConfirmareCautareComponent } from 'src/app/confirmare-cautare/confirmare-cautare.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-cautare-freelancer',
  templateUrl: './cautare-freelancer.component.html',
  styleUrls: ['./cautare-freelancer.component.css']
})
export class CautareFreelancerComponent implements OnInit {

  rezultate: Anunt[];

  selectedCategory: string = 'All';
  selectedLocation: string = 'All';
  categoryControl: FormControl;
  locationControl: FormControl;

  categories: string[] = [
    'All',
    'Programare',
    'Amenajari interioare',
    'Bucatari',
    'Fotograf evenimente',
    'Organizator petreceri'
  ];

  locations: String[] = [
    'All',
    "Cluj-Napoca",
    "Târgu-Mureș",
    "Sibiu",
    "Brașov",
    "București",
    "Timișoara"
  ]

  tiles: Tile[] = [
    { type: 'category', cols: 2, rows: 2 },
    { type: 'results', cols: 6, rows: 4 }
  ];

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private anuntService: AnuntService,
    public dialog: MatDialog) {
    this.matIconRegistry.addSvgIcon(
      'microphone',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/radio-microphone.svg')
    );
  }

  ngOnInit() {
    this.categoryControl = new FormControl('All', Validators.required);
    this.locationControl = new FormControl('All', Validators.required);
    this.rezultate = this.anuntService.getFreelanceriAnunturi();
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
        if (result.categorie === 'All') {
          this.rezultate = this.anuntService.getFreelanceriAnunturi();
        } else {
          this.rezultate = this.anuntService.getFreelanceriAnunturi().filter(a => a.categorie === result.categorie);
        }

        if (result.locatie != 'All') {
          this.rezultate = this.rezultate.filter(a => a.locatie === result.locatie);
        }
        this.selectedCategory = result.categorie;
        this.selectedLocation = result.locatie;
        console.log(this.rezultate);
      }
    });
  }

}

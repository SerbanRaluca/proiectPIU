import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatIconRegistry, MatDialog} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Anunt} from '../../../../shared/anunt.model';
import {ToastrService} from 'ngx-toastr';
import {AnuntService} from '../../../../shared/anunt.service';
import {Review} from '../../../../shared/review.model';
import {ReviewService} from '../../../../shared/review.service';
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import { ChatComponent } from 'src/app/chat/chat.component';
import { MesajInformareComponent } from 'src/app/mesaj-informare/mesaj-informare.component';

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

  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  freelFav: Anunt[];
  reviews: Review[];
  sumRating = 0;
  index = 0;

  constructor(public reviewService: ReviewService,
              public toastr: ToastrService,
              config: NgbRatingConfig,
              public anuntService: AnuntService,
              @Inject(MAT_DIALOG_DATA) public data: Anunt,
              iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
              public dialog: MatDialog
  ) {
    iconRegistry.addSvgIcon(
      'location',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/location.svg'));
    iconRegistry.addSvgIcon(
      'briefcase',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/briefcase.svg'));
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit() {
    this.freelFav = this.anuntService.freelancerFav;
    this.reviews = this.reviewService.getReviews().filter(a => a.numeFreelancer === this.data.nume);
    this.reviews.forEach( review => {
      this.sumRating = this.sumRating + review.rating;
      this.index = this.index + 1;
    });
    this.sumRating = this.sumRating / this.index;
    this.selected = this.data.favorit;
  }

  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
    if (this.selected) {
      this.toastr.success('Freelancer adăugat la favorite', 'Adăugare la favorite');
      this.data.favorit = true;
      this.freelFav.push(new Anunt(this.data.titlu, this.data.nume, this.data.categorie,
        this.data.locatie, this.data.poza, this.data.descriere,
        this.data.salariu_min, this.data.applied, this.data.favorit));
      console.log(this.freelFav);
    }

    if (!this.selected) {
      this.toastr.warning('Freelancer șters de la favorite', 'Ștergere de la favorite');
      this.data.favorit = false;
      const index = this.freelFav.indexOf(this.data);
      this.freelFav.splice(index, 1);
      console.log(this.freelFav);
    }
  }

  contacteaza(){
    this.dialog.open(ChatComponent, {
      width: '350px',
      height: '500px',
      position: { top: '15%', left: '70%' },
      data: this.data
    });
    
  }

  trimiteFormular(){
    this.dialog.open(MesajInformareComponent,{
        width: '400px',
        height: '300px',
        position: { top: '2%', left: '30%' },
        data:'Formularul a fost trimis către angajat.'
    });
  }
}

import {Component, OnInit, Inject, EventEmitter, Output, Input} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatIconRegistry} from '@angular/material';
import {AnuntJob} from 'src/app/shared/anuntJob.model';
import {DomSanitizer} from '@angular/platform-browser';
import {AnuntService} from '../../../../shared/anunt.service';
import {ToastrService} from 'ngx-toastr';


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
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  jobFav: AnuntJob[];

  constructor(
    public toastr: ToastrService,
    public anuntService: AnuntService,
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
    this.jobFav = this.anuntService.jobFav;
    this.selected = this.data.favorit;
    console.log(this.data);
  }

  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
    if (this.selected) {
      this.toastr.success('Job adăugat la favorite', 'Adăugare la favorite');
      this.data.favorit = true;
      this.jobFav.push(new AnuntJob(this.data.categorie, this.data.angajator, this.data.logo,
        this.data.titlu, this.data.locatie, this.data.descriere, this.data.salariu, this.data.aplied, this.data.favorit,
        this.data.nivel));
      console.log(this.jobFav);
    }

    if (!this.selected) {
      this.toastr.warning('Job șters de la favorite', 'Ștergere de la favorite');
      this.data.favorit = false;
      this.jobFav = this.jobFav.filter(i => i.titlu !== this.data.titlu);
      console.log(this.jobFav);
    }
  }

}

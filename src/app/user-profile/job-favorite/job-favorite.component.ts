import {Component, OnInit} from '@angular/core';
import {AnuntJob} from '../../shared/anuntJob.model';
import {AnuntService} from '../../shared/anunt.service';
import {DetaliiJobComponent} from '../../employee/cautare-job/rezultate-cautare/detalii-job/detalii-job.component';
import {MatDialog} from '@angular/material/dialog';
import {JobFavoriteDetailsComponent} from './job-favorite-details/job-favorite-details.component';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-job-favorite',
  templateUrl: './job-favorite.component.html',
  styleUrls: ['./job-favorite.component.css']
})
export class JobFavoriteComponent implements OnInit {
  jobFav: AnuntJob[];
  jobAnunt: AnuntJob[];
  anunt: AnuntJob;

  constructor(public toastr: ToastrService,
              public anuntService: AnuntService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.jobFav = this.anuntService.jobFav;
    this.jobAnunt = this.anuntService.getJobAnunturi();
  }

  onDetails(rez: AnuntJob) {
    const dialogRef = this.dialog.open(JobFavoriteDetailsComponent, {
      width: '800px',
      height: '500px',
      position: {top: '2%', left: '30%'},
      data: rez
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed');
    });
  }

  onDelete(anunt: AnuntJob) {
    const index = this.jobFav.indexOf(anunt);
    this.anunt = this.jobAnunt.find(x => x.titlu === anunt.titlu);
    this.anunt.favorit = false;
    this.jobFav.splice(index, 1);
    this.toastr.warning('Job șters de la favorite', 'Ștergere de la favorite');
    console.log(this.jobFav);
    console.log(this.jobAnunt);
  }

}
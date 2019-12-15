import {Component, Input, OnInit} from '@angular/core';
import {FreelancerApplication, JobApplication} from '../../../shared/job-application.model';
import {Anunt} from '../../../shared/anunt.model';
import {MatDialog} from '@angular/material';
import {AnuntJob} from '../../../shared/anuntJob.model';
import {DetaliiJobComponent} from '../../../employee/cautare-job/rezultate-cautare/detalii-job/detalii-job.component';
import {DetaliiFreelancerComponent} from './detalii-freelancer/detalii-freelancer.component';

@Component({
  selector: 'app-rezultate-cautare-freelanceri',
  templateUrl: './rezultate-cautare-freelanceri.component.html',
  styleUrls: ['./rezultate-cautare-freelanceri.component.css']
})
export class RezultateCautareFreelanceriComponent implements OnInit {

  applications: FreelancerApplication[] = [];

  @Input() rezultate: Anunt[];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    console.log(this.rezultate);
  }

  onDetails(rez: Anunt) {
    const dialogRef = this.dialog.open(DetaliiFreelancerComponent, {
      width: '800px',
      height: '500px',
      position: {top: '2%', left: '30%'},
      data: rez
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed');
      console.log(sessionStorage.getItem('name'));
      this.applications.push(new FreelancerApplication(result, 'applied'));
      sessionStorage.setItem('freelancer-applications', JSON.stringify(this.applications));
      console.log(this.applications);
    });

  }
}

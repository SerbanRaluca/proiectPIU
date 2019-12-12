import { Component, OnInit, Input } from '@angular/core';
import { AnuntJob } from 'src/app/shared/anuntJob.model';
import { MatDialog } from '@angular/material';
import { DetaliiJobComponent } from './detalii-job/detalii-job.component';
import { JobApplication } from 'src/app/shared/job-application.model';

@Component({
  selector: 'app-rezultate-cautare',
  templateUrl: './rezultate-cautare.component.html',
  styleUrls: ['./rezultate-cautare.component.css']
})
export class RezultateCautareComponent implements OnInit {

  @Input() rezultate:AnuntJob[];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    console.log(this.rezultate)
  }

  onDetails(rez:AnuntJob){
    const dialogRef = this.dialog.open(DetaliiJobComponent, {
      width: '800px',
      height:'500px',
      position:{top: '2%', left: '30%'},
      data: rez
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog closed");
      console.log(sessionStorage.getItem("name"));
      let applications:JobApplication[]=[];
      applications.push(new JobApplication(result,"applied"));
      sessionStorage.setItem("job-applications",JSON.stringify(applications));
      console.log(applications);
    });

  }
   
}

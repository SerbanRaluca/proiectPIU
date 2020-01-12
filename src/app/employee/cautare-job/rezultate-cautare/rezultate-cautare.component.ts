import { Component, OnInit, Input } from '@angular/core';
import { AnuntJob } from 'src/app/shared/anuntJob.model';
import { MatDialog } from '@angular/material';
import { DetaliiJobComponent } from './detalii-job/detalii-job.component';
import { MesajInformareComponent } from 'src/app/mesaj-informare/mesaj-informare.component';
import { StatusService } from 'src/app/shared/statusService';

@Component({
  selector: 'app-rezultate-cautare',
  templateUrl: './rezultate-cautare.component.html',
  styleUrls: ['./rezultate-cautare.component.css']
})
export class RezultateCautareComponent implements OnInit {

  @Input() rezultate: AnuntJob[];

  constructor(public dialog: MatDialog,public statusService:StatusService) {
  }

  ngOnInit() {
    console.log(this.rezultate);
  }

  onDetails(rez: AnuntJob) {
    const dialogRef = this.dialog.open(DetaliiJobComponent, {
      width: '800px',
      height: '500px',
      position: { top: '2%', left: '30%' },
      data: rez
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed');
      console.log(sessionStorage.getItem('name'));
      if (result.aplied) {
        this.dialog.open(MesajInformareComponent, {
          width: '400px',
          height: '300px',
          position: { top: '2%', left: '30%' },
          data: 'Ați aplicat cu succes! Accesați secțiunea de STATUS pentru mai multe detalii!'
        });
        result.status='TRIMIS';
        this.statusService.addStatusContracte(result);
      }
    });
  }
}

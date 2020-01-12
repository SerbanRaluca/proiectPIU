import {Component, Input, OnInit} from '@angular/core';
import { AnuntJob } from '../shared/anuntJob.model';
import { StatusService } from '../shared/statusService';

@Component({
  selector: 'app-user-contracte',
  templateUrl: './user-contracte.component.html',
  styleUrls: ['./user-contracte.component.css']
})
export class UserContracteComponent implements OnInit {

   rezultateContracte: AnuntJob[];

  constructor(private statusService:StatusService) { 
  }

  ngOnInit() {
    console.log("Afisare rezultate complete");
    this.rezultateContracte=this.statusService.getStatusContracte();
   
    console.log(this.rezultateContracte);
  }
}

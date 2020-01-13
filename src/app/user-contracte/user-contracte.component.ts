import { Component, Input, OnInit } from '@angular/core';
import { AnuntJob } from '../shared/anuntJob.model';
import { StatusService } from '../shared/statusService';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { FormularAngajareComponent } from '../formular-angajare/formular-angajare.component';

@Component({
  selector: 'app-user-contracte',
  templateUrl: './user-contracte.component.html',
  styleUrls: ['./user-contracte.component.css']
})
export class UserContracteComponent implements OnInit {

  rezultateContracte: AnuntJob[];
  user: User;

  constructor(private statusService: StatusService,
    private userService: UserService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public dialog:MatDialog) {
    iconRegistry.addSvgIcon(
      'file',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/file.svg'));
  }

  ngOnInit() {
    console.log("Afisare rezultate complete");
    this.rezultateContracte = this.statusService.getStatusContracte();

    console.log(this.rezultateContracte);
    this.user = this.userService.getUser();
  }

  completeazaFormular(){
    const dialogRef = this.dialog.open(FormularAngajareComponent, {
      width: '500px',
      height: '600px',
      position: { top: '2%', left: '30%' },
      data: ""
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

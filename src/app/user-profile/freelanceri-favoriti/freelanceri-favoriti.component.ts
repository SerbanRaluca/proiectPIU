import {Component, OnInit} from '@angular/core';
import {Anunt} from '../../shared/anunt.model';
import {ToastrService} from 'ngx-toastr';
import {AnuntService} from '../../shared/anunt.service';
import {MatDialog} from '@angular/material/dialog';
import {FreelancerFavoritDetailsComponent} from "./freelancer-favorit-details/freelancer-favorit-details.component";

@Component({
  selector: 'app-freelanceri-favoriti',
  templateUrl: './freelanceri-favoriti.component.html',
  styleUrls: ['./freelanceri-favoriti.component.css']
})
export class FreelanceriFavoritiComponent implements OnInit {
  freelFav: Anunt[];
  freelList: Anunt[];
  freel: Anunt;

  constructor(public toastr: ToastrService,
              public anuntService: AnuntService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.freelFav = this.anuntService.freelancerFav;
    this.freelList = this.anuntService.anunturiFreelancer;
  }

  onDetails(rez: Anunt) {
    const dialogRef = this.dialog.open(FreelancerFavoritDetailsComponent, {
      width: '800px',
      height: '500px',
      position: {top: '2%', left: '30%'},
      data: rez
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed');
    });
  }

  onDelete(anunt: Anunt) {
    const index = this.freelFav.indexOf(anunt);
    this.freel = this.freelList.find(x => x.titlu === anunt.titlu);
    this.freel.favorit = false;
    this.freelFav.splice(index, 1);
    this.toastr.warning('Freelancer șters de la favorite', 'Ștergere de la favorite');
  }

}

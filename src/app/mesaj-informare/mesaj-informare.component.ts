import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-mesaj-informare',
  templateUrl: './mesaj-informare.component.html',
  styleUrls: ['./mesaj-informare.component.css']
})
export class MesajInformareComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MesajInformareComponent>,
    @Inject(MAT_DIALOG_DATA) public data:string
  ) { }

  ngOnInit() {
  }

  ok(){
    console.log("confirm message");
  }

}

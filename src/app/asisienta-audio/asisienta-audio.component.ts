import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DateCautare } from '../shared/dateCautare.model';

@Component({
  selector: 'app-asisienta-audio',
  templateUrl: './asisienta-audio.component.html',
  styleUrls: ['./asisienta-audio.component.css']
})
export class AsistentaAudioComponent implements OnInit {

  listening=false;
  message:string;
  constructor(
    public dialogRef: MatDialogRef<AsistentaAudioComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DateCautare,
  ) { }

  ngOnInit() {
  }

  listen(){
    this.listening=true;
    this.message="";
    var interval1 =0;
    var interval2 =0;
    console.log(this.listening);
    var listeningForCategorie=setInterval(()=>{
      interval1=interval1+1000;
      this.message="Ascultare pentru categorie...";
      if(interval1===5000){
        this.message="Ați ales:Programare";
        this.data.categorie="Programare";
        clearInterval(listeningForCategorie);
      }
    },1000);
    
    var listeningForLocatie=setInterval(()=>{
      interval2=interval2+1000;
      if(interval2===10000){
        this.message="Ascultare pentru locatie...";
      }
      if(interval2===15000){
        this.message="Ați ales:Cluj-Napoca";
        this.data.locatie="Cluj-Napoca";
       
      }
      if(interval2===17000){
        clearInterval(listeningForLocatie);
        this.listening=false;
      }
    },1000);
    
  }

  confirm(){
    this.data.confirmed=true;
  }

}

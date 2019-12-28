import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DateCautare } from 'src/app/shared/dateCautare.model';

interface marker {
	lat: number;
	lng: number;
  label: string;
  draggable:boolean;
}

@Component({
  selector: 'app-confirmare-cautare',
  templateUrl: './confirmare-cautare.component.html',
  styleUrls: ['./confirmare-cautare.component.css']
})
export class ConfirmareCautareComponent implements OnInit {

  latitude = 46.00;
  longitude = 25.00;
  zoom: number = 6

  markers:marker[]=[
     {
      lat: 46.769379,
		  lng: 23.5899542,
      label: 'Cluj-Napoca',
      draggable:false
     },
     {
      lat: 45.7973912,
		  lng: 24.1519202,
      label: 'Sibiu',
      draggable:false
     },
     {
      lat: 46.5446244,
		  lng: 24.5611947,
      label: 'Târgu-Mureș',
      draggable:false
     }
  ]

  marker:marker;

  constructor(
    public dialogRef: MatDialogRef<ConfirmareCautareComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DateCautare,
  ) {}

  ngOnInit() {
    console.log(this.data.locatie);
    console.log(this.markers[1].lat)
    this.latitude=this.markers.find(m=>m.label == this.data.locatie).lat;
    this.longitude=this.markers.find(m=>m.label == this.data.locatie).lng;
    if(this.data.locatie!='All'){
      this.zoom=8;
    }
    console.log(this.latitude);
    console.log(this.longitude);
  }

  confirm(){
    this.data.confirmed=true;
  }

  clickedMarker(label: string, index: number) {
    this.latitude=this.markers[index].lat;
    this.longitude=this.markers[index].lng;
    this.data.locatie=label;
    if(this.data.locatie!='All'){
      this.zoom=8;
    }
  }

}

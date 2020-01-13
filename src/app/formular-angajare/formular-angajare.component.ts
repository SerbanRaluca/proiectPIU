import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MesajInformareComponent } from '../mesaj-informare/mesaj-informare.component';

@Component({
  selector: 'app-formular-angajare',
  templateUrl: './formular-angajare.component.html',
  styleUrls: ['./formular-angajare.component.css']
})
export class FormularAngajareComponent implements OnInit {

  studii:string[]=[
    'Studii primare 1 (Clasele I-IV)',
    'Studii primare 2 (Clasele V-VIII)',
    'Studii Profesionale',
    'Studii Liceale',
    'Studii Postliceale',
    'Studii Universitare'
  ];

  postForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormularAngajareComponent>,
    @Inject(MAT_DIALOG_DATA) public data:"",
    public dialog:MatDialog
  ) {}


  ngOnInit() {
    this.postForm = new FormGroup({
      nume: new FormControl(null, Validators.required),
      birthdate: new FormControl(null, Validators.required),
      oras: new FormControl(null, Validators.required),
      adresa: new FormControl(null, Validators.required),
      tara: new FormControl(null, Validators.required),
      judet: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      telefon: new FormControl(null,Validators.required),
      studii:new FormControl(null,Validators.required),
      calificare:new FormControl(null,Validators.required),
      locMunca:new FormControl(null,Validators.required)
    });
  }

  trimite(){
    if(this.postForm.invalid){
      this.dialog.open(MesajInformareComponent,{
        width: '400px',
        height: '300px',
        position: { top: '2%', left: '30%' },
        data:'Nu ați completat toate campurile.Vă rugam reincercați!'
      });
    }else{
      this.dialog.open(MesajInformareComponent,{
        width: '400px',
        height: '300px',
        position: { top: '2%', left: '30%' },
        data:'Formularul a fost trimis cu success.'
      });
    }
    
  }

}

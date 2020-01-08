import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Contracte} from '../../../shared/contracte.model';

@Component({
  selector: 'app-plata',
  templateUrl: './plata.component.html',
  styleUrls: ['./plata.component.css']
})
export class PlataComponent implements OnInit {
  postForm: FormGroup;

  constructor(public toastr: ToastrService,
              public dialogRef: MatDialogRef<PlataComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Contracte) {
  }

  ngOnInit() {
    this.postForm = new FormGroup({
      suma: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.data.status = 'Incheiat';
    this.toastr.success('Plata efectuata cu succes', 'Plata online');
  }

}

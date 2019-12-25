import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-incarcare-documente',
  templateUrl: './incarcare-documente.component.html',
  styleUrls: ['./incarcare-documente.component.css']
})
export class IncarcareDocumenteComponent implements OnInit {

  user: User;
  file: string = '';
  document: string = ''

  color = 'primary';
  mode = 'determinate';
  value = 0;

  upload = false;
  ready = false;

  @ViewChild('inputFile', { static: false }) myInputVariable: ElementRef;

  constructor(private userService: UserService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'file',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/file.svg'));
  }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  uploadFile() {
    console.log("upload");
    this.upload = true;
    let path = this.myInputVariable.nativeElement.value;
    console.log(path);
    let doc = path.split("\\", 10);
    this.document = doc[doc.length - 1]
    console.log(this.document);
    var interval = setInterval(() => {
      this.value = this.value + 20;
      console.log("progres-" + this.value);
      if (this.value == 100) {
        clearInterval(interval);
        console.log('Uploaded');
        this.ready = true;
      };
    }, 1000);
  }

  finish() {
    console.log("finish");
    this.upload = false;
    this.ready = false;
    this.value = 0;
    this.user.profil.documente.push(this.document);
    this.myInputVariable.nativeElement.value = '';
  }

  cancel() {
    this.upload = false;
    this.ready = false;
    this.value = 0;
    this.myInputVariable.nativeElement.value = '';
  }

}

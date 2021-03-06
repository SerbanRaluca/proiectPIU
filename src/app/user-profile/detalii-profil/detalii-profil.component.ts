import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-detalii-profil',
  templateUrl: './detalii-profil.component.html',
  styleUrls: ['./detalii-profil.component.css']
})
export class DetaliiProfilComponent implements OnInit {

  user:User;

  @ViewChild('inputImage', { static: false }) myInputVariable: ElementRef;

  constructor(private userService:UserService) { }

  ngOnInit() {
   this.user=this.userService.getUser();
  }

  changePicture(){
    let path = this.myInputVariable.nativeElement.value;
    console.log(path);
    let image = path.split("\\", 10);
    this.user.profil.image = image[image.length - 1];
  }

}

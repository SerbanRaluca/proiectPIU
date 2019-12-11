import { Component, OnInit, Input } from '@angular/core';
import { AnuntJob } from 'src/app/shared/anuntJob.model';

@Component({
  selector: 'app-rezultate-cautare',
  templateUrl: './rezultate-cautare.component.html',
  styleUrls: ['./rezultate-cautare.component.css']
})
export class RezultateCautareComponent implements OnInit {

  @Input() rezultate:AnuntJob[];

  constructor() {}

  ngOnInit() {
    console.log(this.rezultate)
  }

}

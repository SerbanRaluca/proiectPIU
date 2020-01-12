import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Anunt } from '../shared/anunt.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Message } from './message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages:Message[]=[];
  replayMessages:string[]=[
    'Salut',
    'Da sunt disponibil.',
    'Va las aici numarul meu de telefon-0723451278.',
     'Multumesc si eu.'
  ];
  index:number=0;
  messageForm:FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ChatComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Anunt,
  ) { }

  ngOnInit() {
    this.messageForm=new FormGroup({
      'message':new FormControl(null,Validators.required)
    })
  }

  send(){
    let msg=this.messageForm.value['message'];
    console.log(msg);
    let message=new Message(msg,true);
    this.messages.push(message);
    this.messageForm.reset();
    setTimeout (() => {
      this.messages.push(new Message(this.replayMessages[this.index],false));
      this.index++;
   }, 3000);
  
  }

}

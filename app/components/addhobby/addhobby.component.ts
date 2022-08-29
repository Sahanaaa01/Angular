import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-addhobby',
  templateUrl: './addhobby.component.html',
  styleUrls: ['./addhobby.component.css']
})
export class AddhobbyComponent {
  myhobby="";
  @Output() mynewhobby= new EventEmitter;

  no:any;
  constructor() { }
  addhobby(data:string){
    this.mynewhobby.emit(data);
    
    //data="";
  }

  
}

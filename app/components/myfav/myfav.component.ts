import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-myfav',
  templateUrl: './myfav.component.html',
  styleUrls: ['./myfav.component.css']
})
export class MyfavComponent implements OnInit {
  @Input() myhobby:any[]=[];
  @Output() rmfav = new EventEmitter;
  

  constructor() { }

  ngOnInit(): void {
  }

  rmvfav(data:number){
    this.rmfav.emit(data)
  }

}

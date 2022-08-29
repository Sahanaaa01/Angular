import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  phoneNumber = "1234567890";
  hobbies=[{name:"Chess",startdt:"2022-01-01",fav:0,des:"A hobby is considered to be a regular activity that is done for enjoyment, typically during one's leisure time. Hobbies include collecting themed items and objects, engaging in creative and artistic pursuits, playing sports, or pursuing other amusements. "},
  {name:"Caroom",startdt:"2022-01-01",fav:0},
  //{name:"Badminton",startdt:"2022-01-01",fav:0},
  //{name:"VolleyBall",startdt:"2022-01-01",fav:0},
  //{name:"Cricket",startdt:"2022-01-01",fav:0},
  //{name:"ThrowBall",startdt:"2022-01-01",fav:0},
];
favhobby:any[]=[];

isLoggedin=false;
  invalue="";
  isActive = false;
  title = 'Hobbies';
  //col=2;
  //email="abc@gmail.com";
  xyz:any;
  //pic = "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80"
  addHobby(data:any){
    let obj={name:data,startdt:"2022-01-02",fav:0};
    this.hobbies.unshift(obj);
    console.log(data);
  }
  lnk="";
  updatelnk(data:string){
    this.lnk=data;
  }
  
  delhobby($event:any){
    this.hobbies.splice($event,1);
  }
  addtofav($event:any){
    this.hobbies[$event].fav=1;
    this.favhobby=this.hobbies.filter(item=>item.fav==1);
  }
  removefav($event:any){
    this.hobbies[$event].fav=0;
  }

  //Addtohobby($event:any){
    //console.log($event);
   // let obj = {id:Math.random(),hobby:$event,img:'',fav:0};

    //this.myhobby.unshift(obj);
   // $event.target.value=""
  }



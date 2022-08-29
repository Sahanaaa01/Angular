import { Directive,HostListener,ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMydir]'
})
export class MydirDirective {
  @Input() appMydir:any;
  constructor(private el:ElementRef) { }

@HostListener('keyup') keyup(){
  let val:string = this.el.nativeElement.value;
  this.el.nativeElement.value = val.toUpperCase();
  //if (this.appMydir=="uppercase")
  //this.el.nativeElement.value = val.toUpperCase();
  //else
  //this.el.nativeElement.value = val.toLocaleLowerCase();

}

}
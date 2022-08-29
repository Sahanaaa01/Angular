import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  //transform(value: unknown, ...args: unknown[]): unknown {
    //return null;
  //}
  transform(value:string) {
    let val1=value.slice(0,3);
    let val2=value.slice(3,6);
    let val3=value.slice(6);
    return "("+val1+") "+val2+"-"+val3;
}
}

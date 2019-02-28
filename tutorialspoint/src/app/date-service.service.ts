import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateServiceService {

  constructor() { }
  showDate(){
    let date=new Date();
    return date;
  }
}

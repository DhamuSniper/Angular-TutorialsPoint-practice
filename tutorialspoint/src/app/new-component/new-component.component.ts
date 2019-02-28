import { Component, OnInit } from '@angular/core';
import {DateServiceService} from './../date-service.service';
@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  DateServing
  constructor(private DateService: DateServiceService) { }

  ngOnInit() {
   this.DateServing=this.DateService.showDate();
  }

}

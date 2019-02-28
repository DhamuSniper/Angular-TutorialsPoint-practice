import { Component } from '@angular/core';
import { DateServiceService} from './date-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorialspoint';
  Batsmen=["Sehwag","Gambhir","Tendulkar","Dravid","VVS","Yuvraj","MS Dhoni"];

  dropdownChange(event){
    alert("The player has been changed!");
  }
  
  isAvailable=true;
  constructor(private DateService:DateServiceService){}
  DateServing;
  ngOnInit(){
     this.DateServing=this.DateService.showDate();
  }

}

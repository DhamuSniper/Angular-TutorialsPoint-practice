import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{DateServiceService} from './date-service.service'
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ChangedTextDirective } from './changed-text.directive';
import { SecondComponentComponent } from './second-component/second-component.component';
import { NewComponentComponent } from './new-component/new-component.component';
import {Sqrtpipe} from './app.sqrt';
@NgModule({
  declarations: [
    AppComponent,
    ChangedTextDirective,
    SecondComponentComponent,
    NewComponentComponent,
    Sqrtpipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'new-component',
        component:NewComponentComponent,
      }
    ]),
 
  ],
  providers: [ DateServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

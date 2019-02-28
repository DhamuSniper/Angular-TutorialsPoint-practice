import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[changedText]'
})
export class ChangedTextDirective {

  constructor(Element:ElementRef) 
  
  { 
    Element.nativeElement.innerText="Text has been changed from Directive";
  }

}

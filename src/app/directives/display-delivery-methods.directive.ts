import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisplayDeliveryMethods]'
})
export class DisplayDeliveryMethodsDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }


}

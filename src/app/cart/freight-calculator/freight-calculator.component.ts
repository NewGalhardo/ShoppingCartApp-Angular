import { FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Renderer2, ElementRef, Input } from '@angular/core';
import { DeliveryMethod } from 'src/app/models/DeliveryMethod';
import { DeliveryInfo } from 'src/app/models/Cart/DeliveryInfo';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-freight-calculator',
  templateUrl: './freight-calculator.component.html',
  styleUrls: ['./freight-calculator.component.css']
})
export class FreightCalculatorComponent implements OnInit {  
  deliveryMethod: any;
  @Input() cartId!: string;   

  constructor(private service: CartService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {}

  freightForm = this.formBuilder.group({
    postalCode: '',
    method: null
  });

  ngOnInit() {
    
  }

  calculateFreight() {  
    this.deliveryMethod =       
      {
        method: 'Correios Sedex',
        deliveryTimeMin: 2,
        deliveryTimeMax: 5,
        freightCost: 21
      }    
  }

  onSubmit() {
    console.log(this.freightForm.value.postalCode);

    const deliveryInfo = new DeliveryInfo(
      this.cartId,
      this.deliveryMethod.method,
      this.deliveryMethod.deliveryTimeMin,
      this.deliveryMethod.deliveryTimeMax,
      this.freightForm.value.postalCode ?? '',
      this.deliveryMethod.freightCost
    );

    this.service.saveDeliveryInfo(deliveryInfo).subscribe((response) => window.location.reload());
  }
}

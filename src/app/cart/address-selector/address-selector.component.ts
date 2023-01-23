import { DeliveryAddress } from './../../models/Cart/DeliveryAddress';
import { CartService } from './../../services/cart.service';
import { DefaultDeliveryAddress } from '../../models/DefaultDeliveryAddress';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-address-selector',
  templateUrl: './address-selector.component.html',
  styleUrls: ['./address-selector.component.css']
})
export class AddressSelectorComponent implements OnInit {
  defaultAddress!: DefaultDeliveryAddress;
  @Input() cartId!: string;

  constructor(private formBuilder: FormBuilder, private service: CartService) {}

  addressForm = this.formBuilder.group({
    postalCode: '',
    street: '',
    number: 0,
    district: '',
    city: '',
    state: '',
    country: '',
    setAsDefaultAddress: ''
  });

  ngOnInit() {
    this.service.getDefaultDeliveryAddress().subscribe((response) => {
      console.log(response);
      this.defaultAddress = response;
    })
    console.log(this.addressForm.value.setAsDefaultAddress);
  }

  onSubmit() {
    const deliveryAddress = new DeliveryAddress(
      this.cartId,
      this.addressForm.value.postalCode ?? '',
      this.addressForm.value.street ?? '',
      this.addressForm.value.number ?? 0,
      this.addressForm.value.district ?? '',
      this.addressForm.value.city ?? '',
      this.addressForm.value.state ?? '',
      this.addressForm.value.country ?? '',
    );

    this.service.saveDeliveryAddress(deliveryAddress).subscribe((response) => window.location.reload());
  }
}

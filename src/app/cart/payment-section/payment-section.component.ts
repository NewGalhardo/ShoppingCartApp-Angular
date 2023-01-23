import { PaymentInfo } from './../../models/Cart/PaymentInfo';
import { CustomerCreditCard } from './../../models/CustomerCreditCard';
import { FormBuilder } from '@angular/forms';
import { CartService } from './../../services/cart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-section',
  templateUrl: './payment-section.component.html',
  styleUrls: ['./payment-section.component.css']
})
export class PaymentSectionComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private service: CartService) {}

  @Input() cartId!: string;
  @Input() totalPrice!: number;

  pixSelected!: boolean;
  creditCardSelected!: boolean;  

  selectedMethod!: string;
  
  paymentOptionsForm = this.formBuilder.group({
    option: ''
  });

  creditCardInfoForm = this.formBuilder.group({
    cardNumber: '',
    cardExpiresAt: '',
    CVV: 0,
    cardOwner: ''
  })

  ngOnInit() {
    const paymentMethod = sessionStorage.getItem('pmethod');

    if (paymentMethod != null) {
      if (paymentMethod === 'p') {
        this.pixSelected = true;
        this.selectedMethod = 'Pix';

        sessionStorage.removeItem('pmethod');
      }
      else if (paymentMethod === 'c') {
        this.creditCardSelected = true;
        this.selectedMethod = 'Cartão de Crédito';

        sessionStorage.removeItem('pmethod');
      }
    }
  }

  openPaymentMethod(methodInitial: string) {
    if (methodInitial === 'p') {
      sessionStorage.setItem('pmethod', 'p');
      window.location.reload();
    }
    else if (methodInitial === 'c') {
      sessionStorage.setItem('pmethod', 'c');
      window.location.reload();
    }
  }

  onSubmit() {
    const creditCard = new CustomerCreditCard(
      this.creditCardInfoForm.value.cardNumber ?? '',
      this.creditCardInfoForm.value.cardExpiresAt ?? '',
      this.creditCardInfoForm.value.CVV ?? 0,
      this.creditCardInfoForm.value.cardOwner ?? '',
    );

    this.service.saveCustomerCreditCard(creditCard).subscribe((response) => {
      const paymentInfo = new PaymentInfo(
        this.cartId,
        this.selectedMethod,
        true,
        this.totalPrice,
        response._id
      );

      this.service.savePaymentInfo(paymentInfo).subscribe((response) => {
        console.log(response);
        window.location.reload();
      });
    });
  }
}

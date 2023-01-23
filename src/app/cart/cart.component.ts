import { PaymentInfo } from './../models/Cart/PaymentInfo';
import { DeliveryAddress } from './../models/Cart/DeliveryAddress';
import { DeliveryInfo } from './../models/Cart/DeliveryInfo';
import { AppRouteReuseStrategy } from './../app-route-reuse-strategy';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/Cart/CartItem';
import { Invoice } from '../models/Cart/Invoice';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  constructor(private service: CartService, private router: Router, private route: ActivatedRoute) { }

  cartItems: CartItem[] = [];
  cartId!: string;

  freightCost = 0;
  totalPrice = 0;

  freightCompleted!: boolean;
  addressCompleted!: boolean;
  paymentCompleted!: boolean;
  purchaseCompleted!: boolean;

  ngOnInit() {
    const invoice = sessionStorage.getItem('invoice');
    if (invoice != null) {
      this.purchaseCompleted = true;

      sessionStorage.removeItem('invoice');

      //window.location.reload();
      return;
    }

    this.service.getCart().subscribe((response) => {
      if (response === null) {
        console.log('Carrinho vazio!');
        return;
      }      
      this.cartItems = response;
      this.cartId = this.cartItems[0].cartId;
      this.calculateTotalPrice();

      this.getCheckoutPhase();  
    });
  }

  calculateTotalPrice() {    
    for(let i = 0; i < this.cartItems.length; i++) {
      this.totalPrice += this.cartItems[i].totalPrice;
    }
    console.log(this.freightCost);
    console.log(this.totalPrice);
    this.totalPrice += this.freightCost;
    console.log(this.totalPrice);
  }

  getCheckoutPhase() {  
    let deliveryInfo: DeliveryInfo;
    let paymentInfo;
    
    this.service.getDeliveryInfo(this.cartId).subscribe((response1) => {      
      if (response1 === null)
      {
        this.freightCompleted = false;
        this.addressCompleted = false;
        this.paymentCompleted = false;
        return;
      }
      else {
        this.freightCompleted = true;
        this.freightCost += response1.freightCost;
        console.log(this.freightCost);
        
        this.service.getDeliveryAddress(this.cartId).subscribe((response2) => {
          if (response2 === null) {
            this.addressCompleted = false;
            this.paymentCompleted = false;
          }
          else {
            this.addressCompleted = true;
  
            this.service.getPaymentInfo(this.cartId).subscribe((response3) => {
              if (response3 === null) {
                this.paymentCompleted = false;
                return;
              }
              else {
                this.paymentCompleted = true;
  
                return;
              }
            });
          }
        })        
      }
    });
    

    
    
  }

  removeFromCart(cartItemId: string) {
    this.service.removeFromCart(cartItemId).subscribe((response) => console.log(response));

    window.location.reload();
  }

  purchase() {
    let deliveryInfo: DeliveryInfo;
    let deliveryAddress: DeliveryAddress;
    let paymentInfo: PaymentInfo;
    
    this.service.getDeliveryInfo(this.cartId).subscribe((response1) => {
      deliveryInfo = response1;

      this.service.getDeliveryAddress(this.cartId).subscribe((response2) => {
        deliveryAddress = response2;

        this.service.getPaymentInfo(this.cartId).subscribe((response3) => {
          paymentInfo = response3;

          const invoice = new Invoice(
            this.cartItems,
            deliveryInfo,
            deliveryAddress,
            paymentInfo
          );

          this.service.saveInvoice(invoice).subscribe((response4) => {
            console.log(response4);
            sessionStorage.setItem('invoice', 'invoice');  
            
            window.location.reload();
          });
        });
      });
    });

    
  }    

  seeMore() {
    this.router.navigate(['/products']);
  }
}

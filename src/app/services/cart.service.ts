import { PaymentInfo } from './../models/Cart/PaymentInfo';
import { CustomerCreditCard } from './../models/CustomerCreditCard';
import { DeliveryAddress } from './../models/Cart/DeliveryAddress';
import { DeliveryInfo } from './../models/Cart/DeliveryInfo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart/Cart';
import { Invoice } from '../models/Cart/Invoice';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:3000/cart/';

  getCart = () => this.httpClient.get<any>(this.url);

  addToCart = (cartItem: any) => this.httpClient.post<any>(this.url, cartItem);

  removeFromCart = (cartItemId: string) => this.httpClient.delete(this.url + cartItemId);

  getDeliveryInfo = (cartId: string) => this.httpClient.get<any>(this.url + 'delivery-info/' + cartId);

  saveDeliveryInfo = (deliveryInfo: DeliveryInfo) => this.httpClient.post<any>(this.url + 'delivery-info/', deliveryInfo);

  getDefaultDeliveryAddress = () => this.httpClient.get<any>(this.url + 'default-delivery-address/');

  getDeliveryAddress = (cartId: string) => this.httpClient.get<any>(this.url + 'delivery-address/' + cartId);

  saveDeliveryAddress = (deliveryAddress: DeliveryAddress) => this.httpClient.post<any>(this.url + 'delivery-address', deliveryAddress);

  getPaymentInfo = (cartId: string) => this.httpClient.get<any>(this.url + 'payment-info/' + cartId);

  savePaymentInfo = (paymentInfo: PaymentInfo) => this.httpClient.post<any>(this.url + 'payment-info/', paymentInfo);

  getCustomerCreditCards = () => this.httpClient.get<any>(this.url + 'customer-credit-cards');

  saveCustomerCreditCard = (customerCreditCard: CustomerCreditCard) => this.httpClient.post<any>(this.url + 'save-customer-credit-card/', customerCreditCard);  

  saveInvoice = (invoice: Invoice) => this.httpClient.post<any>(this.url + 'save-invoice', invoice);
}

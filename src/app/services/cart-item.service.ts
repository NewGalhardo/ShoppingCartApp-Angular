import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  url = 'http://localhost:3000/'

  constructor(private httpClient: HttpClient) { }

  removeFromCart = (cartItemId: string) => this.httpClient.delete(this.url + cartItemId);

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'http://localhost:3000/products/';

  constructor(private httpClient: HttpClient) { }

  getProducts = () => this.httpClient.get<any>(this.url);

  getProductById = (id: string) => this.httpClient.get<any>(this.url + id);

  registerProduct = (product: Product) => this.httpClient.post<any>(this.url, product);
}

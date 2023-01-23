import { Router } from '@angular/router';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Product } from '../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private service: ProductsService, private router: Router) {}
  
  products: Product[] = [];
  
  ngOnInit() {
    this.service.getProducts().subscribe({
      next: (response) => {
        console.log(response);

        this.products = response;
      },
      error: (e) => {
        if (e instanceof HttpErrorResponse && e.status == 401) {
          this.router.navigate(['signin']);          
        }
      }
    })
  }
  
  
}

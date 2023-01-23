import { FormBuilder } from '@angular/forms';
import { CartService } from './../../services/cart.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  id: string;
  product!: Product;

  productStockNumbers: number[] = [];

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private productsService: ProductsService, 
    private cartService: CartService,
    private formBuilder: FormBuilder) 
    {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);    
  }

  cartItemForm = this.formBuilder.group({    
    color: '',
    quantity: 1
  })
  
  ngOnInit() {
    this.productsService.getProductById(this.id).subscribe((response) => {
        console.log(response);

        this.product = response;

        for(let i = 1; i <= this.product.inStock; i++) {
          this.productStockNumbers.push(i);
        }
      })
  }

  addToCart() {
    const cartItem = {
      id: '',
      productId: this.product._id,
      productTitle: this.product.title,
      color: this.cartItemForm.value.color ?? '',
      quantity: this.cartItemForm.value.quantity ?? '',
      unitPrice: this.product.price,
      totalPrice: this.product.price * this.cartItemForm.value.quantity!
    }
    this.cartService.addToCart(cartItem).subscribe((response) => console.log(response));
  }
}

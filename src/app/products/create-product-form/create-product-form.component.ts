import { ProductsService } from './../../services/products.service';
import { Product } from './../../models/Product';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.css']
})
export class CreateProductFormComponent {
  constructor(private service: ProductsService, private router: Router, private formBuilder: FormBuilder) { }

  productForm = this.formBuilder.group({
    image: '',
    title: '',
    description: '',
    section: '',
    price: 0,
    inStock: 0
  });

  onSubmit = () => {
    const product = new Product(
      this.productForm.value.image ?? '',
      this.productForm.value.title ?? '',
      this.productForm.value.description ?? '',
      this.productForm.value.section ?? '',
      this.productForm.value.price ?? 0,
      this.productForm.value.inStock ?? 0
    );

    this.service.registerProduct(product).subscribe({
      next: (response) => console.log(response),
      error: (e) => {
        if (e instanceof HttpErrorResponse) {
          if (e.status == 401) {
            this.router.navigate(['signin']);
          }
        }
      }
    });
  }
}
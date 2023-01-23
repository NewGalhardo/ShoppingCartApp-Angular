import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressSelectorComponent } from './cart/address-selector/address-selector.component';
import { CartComponent } from './cart/cart.component';
import { FreightCalculatorComponent } from './cart/freight-calculator/freight-calculator.component';
import { PaymentSectionComponent } from './cart/payment-section/payment-section.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { CreateProductFormComponent } from './products/create-product-form/create-product-form.component';
import { ProductPageComponent } from './products/product-page/product-page.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'signup', component: SignUpComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductPageComponent},
  {path: 'register/product', component: CreateProductFormComponent},
  {path: 'cart', component: CartComponent, data: {reuseComponent: true}},
  {path: 'freight', component: FreightCalculatorComponent, data: {reuseComponent: true}},
  {path: 'address-selector', component: AddressSelectorComponent, data: {reuseComponent: true}},
  {path: 'payment-section', component: PaymentSectionComponent, data: {reuseComponent: true}}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

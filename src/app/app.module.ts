import { TokenInterceptorService } from './services/token-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { MaterialModule } from './material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CreateProductFormComponent } from './products/create-product-form/create-product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductPageComponent } from './products/product-page/product-page.component';
import { CartComponent } from './cart/cart.component';
import { FreightCalculatorComponent } from './cart/freight-calculator/freight-calculator.component';
import { DisplayDeliveryMethodsDirective } from './directives/display-delivery-methods.directive';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { AppRouteReuseStrategy } from './app-route-reuse-strategy';
import { AddressSelectorComponent } from './cart/address-selector/address-selector.component';
import { PaymentSectionComponent } from './cart/payment-section/payment-section.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    CreateProductFormComponent,
    ProductPageComponent,
    CartComponent,
    FreightCalculatorComponent,
    DisplayDeliveryMethodsDirective,
    AddressSelectorComponent,
    PaymentSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoginModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: RouteReuseStrategy, 
      useClass: AppRouteReuseStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Product } from 'src/app/models/Product';

export class Cart {
    _id!: string;
    products: Product[];
    totalPrice: number;

    constructor(products: Product[], totalPrice: number) {
        this.products = products;
        this.totalPrice = totalPrice;
    }
}
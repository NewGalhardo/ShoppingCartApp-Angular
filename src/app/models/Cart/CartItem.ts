export class CartItem {
    _id!: string;
    cartId: string;
    productId: string;
    productTitle: string;
    color: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;

    constructor(
        cartId: string, 
        productId: string, 
        productTitle: string, 
        color: string, 
        quantity: number, 
        unitPrice: number, 
        totalPrice: number) {
            this.cartId = cartId;
            this.productId = productId;
            this.productTitle = productTitle;
            this.color = color;
            this.quantity = quantity;
            this.unitPrice = unitPrice;
            this.totalPrice = totalPrice;
    }
}
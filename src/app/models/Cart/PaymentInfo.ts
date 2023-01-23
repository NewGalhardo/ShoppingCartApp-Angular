export class PaymentInfo {
    cartId: string;
    paymentMethod: string;
    paymentIsApproved: boolean;
    totalPrice: number;
    creditCardId: string;

    constructor(cartId: string, paymentMethod: string, paymentIsApproved: boolean, totalPrice: number, creditCardId: string) {
        this.cartId = cartId;
        this.paymentMethod = paymentMethod;
        this.paymentIsApproved = paymentIsApproved;
        this.totalPrice = totalPrice;
        this.creditCardId = creditCardId;
    }
}
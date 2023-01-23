export class CustomerCreditCard {
    cardNumber: string;
    cardExpiresAt: string;
    CVV: number;
    cardOwner: string;

    constructor(cardNumber: string, cardExpiresAt: string, CVV: number, cardOwner: string) {
        this.cardNumber = cardNumber;
        this.cardExpiresAt = cardExpiresAt;
        this.CVV = CVV;
        this.cardOwner = cardOwner;

    }
}
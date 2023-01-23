export class DeliveryInfo {
    cartId: string; 
    deliveryMethod: string;
    deliveryTimeMin: number;
    deliveryTimeMax: number;
    postalCode: string;
    freightCost: number;
    deliveryAddressId!: string;

    constructor(cartId: string, 
        deliveryMethod: string, 
        deliveryTimeMin: number, 
        deliveryTimeMax: number, 
        postalCode: string,
        freightCost: number
        ) 
    {
        this.cartId = cartId;
        this.deliveryMethod = deliveryMethod;
        this.deliveryTimeMin = deliveryTimeMin;
        this.deliveryTimeMax = deliveryTimeMax;
        this.postalCode = postalCode;
        this.freightCost = freightCost;
    }
}
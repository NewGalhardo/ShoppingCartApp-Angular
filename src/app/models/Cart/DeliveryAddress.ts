export class DeliveryAddress {
    cartId: string;
    postalCode: string;
    street: string;
    number: number;
    district: string;
    city: string;
    state: string;
    country: string;

    constructor(cartId: string, 
        postalCode: string, 
        street: string, 
        number: number, 
        district: string, 
        city: string, 
        state: string, 
        country: string
        ) 
    {
        this.cartId = cartId;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
        this.district = district;
        this.city = city;
        this.state = state;
        this.country = country;
    }
}
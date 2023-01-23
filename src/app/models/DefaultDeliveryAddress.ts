export class DefaultDeliveryAddress {
    postalCode: string;
    street: string;
    number: number;
    district: string;
    city: string;
    state: string;
    country: string;

    constructor(postalCode: string,
        street: string,
        number: number,
        district: string,
        city: string,
        state: string,
        country: string
    )
    {
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
        this.district = district;
        this.city = city;
        this.state = state;
        this.country = country;
    }
}
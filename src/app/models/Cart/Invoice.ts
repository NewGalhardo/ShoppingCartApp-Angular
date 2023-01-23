import { PaymentInfo } from './PaymentInfo';
import { DeliveryAddress } from './DeliveryAddress';
import { DeliveryInfo } from 'src/app/models/Cart/DeliveryInfo';
import { CartItem } from "./CartItem";

export class Invoice {
    purchasedProducts: CartItem[];
    deliveryInfo: DeliveryInfo;
    deliveryAddress: DeliveryAddress;
    paymentInfo: PaymentInfo;

    constructor(purchasedProducts: CartItem[], deliveryInfo: DeliveryInfo, deliveryAddress: DeliveryAddress, paymentInfo: PaymentInfo) {
        this.purchasedProducts = purchasedProducts;
        this.deliveryInfo = deliveryInfo;
        this.deliveryAddress = deliveryAddress;
        this.paymentInfo = paymentInfo;
    }
}
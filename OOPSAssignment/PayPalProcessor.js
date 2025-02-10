import { IPaymentProcessor } from "./IPaymentProcessor.js";

export class PayPalProcessor extends IPaymentProcessor {
    processPayment(amount) {
        console.log(`Processing PayPal payment of $${amount}`);
        return true;
    }
}
import { IPaymentProcessor } from "./IPaymentProcessor.js";

export class CreditCardProcessor extends IPaymentProcessor {
    processPayment(amount) {
        console.log(`Processing credit card payment of $${amount}`);
        return true;
    }
}
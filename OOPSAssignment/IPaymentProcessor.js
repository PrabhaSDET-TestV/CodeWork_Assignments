export class IPaymentProcessor {
    processPayment(amount) {
        throw new Error("Method 'processPayment()' must be implemented.");
    }
}

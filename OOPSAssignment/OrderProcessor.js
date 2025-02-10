import { InvoiceGenerator } from "./InvoiceGenerator.js";

export class OrderProcessor {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
        this.invoiceGenerator = new InvoiceGenerator();
    }

    processOrder(order) {
        const totalAmount = order.getTotal();
        if (this.paymentProcessor.processPayment(totalAmount)) {
            console.log("Payment successful. Generating invoice...");
            this.invoiceGenerator.generateInvoice(order);
        } else {
            console.log("Payment failed. Order not processed.");
        }
    }
}
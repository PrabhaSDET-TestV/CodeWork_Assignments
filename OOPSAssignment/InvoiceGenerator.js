export class InvoiceGenerator {
    generateInvoice(order) {
        console.log("Generating invoice for order...");
        console.log(`Customer: ${order.customer.getContactInfo()}`);
        order.products.forEach(item => {
            console.log(`- ${item.product.name} x${item.quantity}: $${item.product.price * item.quantity}`);
        });
        console.log(`Total: $${order.getTotal()}`);
    }
}
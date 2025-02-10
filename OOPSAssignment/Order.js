export class Order {
    constructor(customer) {
        this.customer = customer;
        this.products = [];
    }

    addProduct(product, quantity) {
        product.reduceStock(quantity);
        this.products.push({ product, quantity });
    }

    getTotal() {
        return this.products.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    }
}
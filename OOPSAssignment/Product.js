export class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    getDetails() {
        return `${this.name} - $${this.price} (Stock: ${this.stock})`;
    }

    reduceStock(quantity) {
        if (this.stock >= quantity) {
            this.stock -= quantity;
        } else {
            throw new Error(`Not enough stock for ${this.name}`);
        }
    }
}
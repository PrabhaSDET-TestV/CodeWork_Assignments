import { Product } from "./Product.js";
import { Customer } from "./Customer.js";
import { Order } from "./Order.js";
import { OrderProcessor } from "./OrderProcessor.js";
import { CreditCardProcessor } from "./CreditCardProcessor.js";

// Create customer
const customer = new Customer("John Doe", "john@example.com", "123 Main St");

// Create products
const laptop = new Product("Laptop", 1000, 5);
const phone = new Product("Phone", 500, 10);

// Create order
const order = new Order(customer);
order.addProduct(laptop, 1);
order.addProduct(phone, 2);

// Process order
const paymentProcessor = new CreditCardProcessor();
const orderProcessor = new OrderProcessor(paymentProcessor);
orderProcessor.processOrder(order);
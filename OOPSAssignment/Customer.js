export class Customer {
    constructor(name, email, address) {
        this.name = name;
        this.email = email;
        this.address = address;
    }

    getContactInfo() {
        return `${this.name} - ${this.email} - ${this.address}`;
    }
}
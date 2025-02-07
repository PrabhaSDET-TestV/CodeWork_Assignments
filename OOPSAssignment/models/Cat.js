import { Animal } from "./Animal.js";

export class Cat extends Animal {
    constructor(name, age, health_status, color, indoor, adoption_status = "Available") {
        super(name, "Cat", age, health_status, adoption_status);
        this.color = color;
        this.indoor = indoor;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Color: ${this.color}, Indoor: ${this.indoor ? "Yes" : "No"}`);
    }
}

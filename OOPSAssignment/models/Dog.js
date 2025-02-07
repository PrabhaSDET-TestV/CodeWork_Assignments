import { Animal } from "./Animal.js";

export class Dog extends Animal {
    constructor(name, age, health_status, breed, trained, adoption_status = "Available") {
        super(name, "Dog", age, health_status, adoption_status);
        this.breed = breed;
        this.trained = trained;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Breed: ${this.breed}, Trained: ${this.trained ? "Yes" : "No"}`);
    }
}

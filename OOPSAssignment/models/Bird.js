import { Animal } from "./Animal.js";

export class Bird extends Animal {
    constructor(name, age, health_status, wing_span, can_fly, adoption_status = "Available") {
        super(name, "Bird", age, health_status, adoption_status);
        this.wing_span = wing_span;
        this.can_fly = can_fly;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Wing Span: ${this.wing_span}, Can Fly: ${this.can_fly ? "Yes" : "No"}`);
    }
}

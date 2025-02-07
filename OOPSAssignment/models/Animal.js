export class Animal {
    constructor(name, species, age, health_status, adoption_status = 'Available') {
        this.name = name;
        this.species = species;
        this.age = age;
        this.health_status = health_status;
        this.adoption_status = adoption_status;
    }

    displayInfo() {
        console.log(`${this.name} - ${this.species}, Age: ${this.age}, Health: ${this.health_status}, Status: ${this.adoption_status}`);
    }

    updateHealthStatus(status) {
        this.health_status = status;
        console.log(`${this.name}'s health status updated to: ${status}`);
    }
}
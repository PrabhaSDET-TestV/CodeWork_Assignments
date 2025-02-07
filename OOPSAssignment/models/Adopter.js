export class Adopter {
    constructor(adopter_id, name, contact_info) {
        this.adopter_id = adopter_id;
        this.name = name;
        this.contact_info = contact_info;
        this.adopted_animals = [];
    }

    adoptAnimal(animal) {
        if (animal.adoption_status === 'Available') {
            animal.adoption_status = 'Adopted';
            this.adopted_animals.push(animal);
            console.log(`${this.name} adopted ${animal.name}!`);
        } else {
            console.log(`${animal.name} is already adopted.`);
        }
    }

    displayAdoptedAnimals() {
        console.log(`${this.name}'s Adopted Animals:`);
        this.adopted_animals.forEach(animal => animal.displayInfo());
    }
}
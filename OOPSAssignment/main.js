import { Dog } from "./models/Dog.js";
import { Cat } from "./models/Cat.js";
import { Bird } from "./models/Bird.js";
import { Staff } from "./models/Staff.js";
import { Adopter } from "./models/Adopter.js";

const dog = new Dog("Buddy", 3, "Healthy", "Labrador", true);
dog.displayInfo();

const adopter = new Adopter(1, "Alice", "alice@example.com");
adopter.adoptAnimal(dog);
dog.displayInfo();

const staff = new Staff(101, "John", "Vet");
staff.assignTask("Check Buddy's health");
staff.displayTasks();
export class Staff {
    constructor(staff_id, name, role) {
        this.staff_id = staff_id;
        this.name = name;
        this.role = role;
        this.tasks = [];
    }

    assignTask(task) {
        this.tasks.push(task);
        console.log(`Task assigned to ${this.name}: ${task}`);
    }

    displayTasks() {
        console.log(`Tasks for ${this.name}:`, this.tasks.join(', ') || 'No tasks assigned');
    }
}
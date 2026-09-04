class Employee {
    constructor(name) {
        this.name = name;
    }
    getEmpName() {
        return this.name;
    }
}

const emp = new Employee("Chalcedony");
console.log(emp.getEmpName());
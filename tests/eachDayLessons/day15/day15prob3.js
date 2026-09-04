class Employee {
    constructor(empName) {
        this.empName = empName;
    }
    getName() {
        console.log(this.empName);
    }
};

const employee = new Employee("Chalcedony");
console.log("The employee Name: ");
employee.getName();

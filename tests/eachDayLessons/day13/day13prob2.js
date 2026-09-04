const employee1 = {
    name: "Chalcedony",
    skills: [
        "Java",
        "Playwright",
        "Tosca",
        "Functional testing"
    ]
};

const employee2 = {
    name: "Jasper",
    skills: [
        "SAP ABAP",
        "SAP S/4HANA",
        "Development"
    ]
};

console.log("Name of Employee: ");
console.log(employee2.name);
console.log("Skills of Employee: ");
employee2.skills.forEach(set => {
    console.log(set);
});
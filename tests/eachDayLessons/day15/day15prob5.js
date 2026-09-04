class User {
    constructor(name, skills) {
        this.name = name;
        this.skills = skills;
    }

    getName() {
        return this.name;
    }

    getSkills() {
        this.skills.forEach(element => {
            console.log(element);
        });
    }
}

const user = new User("Chalecdony", 
    ["Java", "Playwright", "Javascript"]);
console.log("Name of the user: ");
console.log(user.getName());
console.log("Skills of the user: ");
user.getSkills();
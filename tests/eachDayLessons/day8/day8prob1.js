class User {
    constructor(firstname) {
        this.firstname = firstname;
    }

    showUser() {
        console.log("Welcome "+this.firstname);
    }
}

const user = new User("Chalcedony");
user.showUser();
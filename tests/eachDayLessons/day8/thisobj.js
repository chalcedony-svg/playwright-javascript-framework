class User {
    constructor(name){
        this.name = name;
    }

    showName(){
        console.log(this.name);
    }
}

const user = new User("Chalcedony");
user.showName();
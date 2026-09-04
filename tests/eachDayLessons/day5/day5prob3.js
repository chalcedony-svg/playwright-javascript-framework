function login(username, password){
    if(username === "standard_user" && password ==="secret_sauce"){
        return "login successful";
    }
    else {
        return "Invalid credentials. Please try again";
    }
}

const result = login("standard_user", "secret_sauce");
console.log(result);
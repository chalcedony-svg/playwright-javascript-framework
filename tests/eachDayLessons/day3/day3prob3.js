function login(username,password) {
    if(username === "standard_user" && password === "secret_sauce"){
        console.log("User login successful");
    }
    else{
        console.log("User login unsucessful. Please check username and password");
    }
}

login ("standard_user","secret_sauce");
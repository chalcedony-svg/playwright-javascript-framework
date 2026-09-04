const { convertProcessSignalToExitCode } = require("node:util");

class LoginValidator {
    checklogin(username,password) {
        if(username == "standard_user" && password == "secret_sauce"){
            console.log("User Login is Valid");
        }
        else{
            console.log("Invalid User");
        }
    }
}

module.exports = LoginValidator;
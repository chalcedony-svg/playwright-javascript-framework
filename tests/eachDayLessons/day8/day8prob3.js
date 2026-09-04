
class LoginPage {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    validateLogin() {
        if(this.password === "secret_sauce" && (this.username === "locked_out_user" || this.username === "standard_user")){
            console.log("Login Successful");
        }
        else{
            console.log("Login Failed. Please check crendentials");
        }
    }
}

const loginpage = new LoginPage("locked_out_user","secret_sauce");
loginpage.validateLogin();
class LoginPage {
    login (user, pwd) {
        if (user == "standard_user" && pwd == "secret_sauce"){
            console.log ("User successfully logged in");
        }
        else {
            console.log ("Incorrect credentials. Try again");
        }
    }
}

const loginpage = new LoginPage();
loginpage.login("standard_user","sauce");
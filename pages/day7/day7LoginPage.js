class LoginPage {
    openLoginPage() {
        console.log("Login page opened");
    }

    login(username,password) {
        console.log("Username: "+username);
        console.log("Password: "+password);
        console.log("Login method completed");
    }
}

module.exports = LoginPage;
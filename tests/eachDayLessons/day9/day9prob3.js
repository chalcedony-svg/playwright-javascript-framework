class LoginPage {
    constructor(username,password){
        this.username = username;
        this.password = password;
    }
    getLoginInfo(){
        return "The logged in User is:\n" +this.username+ " | " +this.password;
    }
}
const loginpage = new LoginPage("standard_user", "secret_sauce");
console.log(loginpage.getLoginInfo());
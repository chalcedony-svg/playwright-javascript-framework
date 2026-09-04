console.log("Script started");
const LoginPage = require("../../pages/day7/day7LoginPage");
const loginpage = new LoginPage();
loginpage.openLoginPage();
loginpage.login("standard_user","secret_sauce");

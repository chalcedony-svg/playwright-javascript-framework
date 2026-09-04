async function getLoginStatus(status) {
    this.status = status;
    if(status == true){
        console.log("Login Successful");
    }
    else {
        console.log("Login not successful");
    }
    
}

async function checkStatus() {
    await getLoginStatus(true);
}

checkStatus();
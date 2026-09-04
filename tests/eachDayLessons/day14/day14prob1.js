async function employeeName() {
    return "Chalcedony";
}

async function employeeAddress() {
    return "Kalvakkam Thiruporur 603110";
}

async function employeeCity() {
    return "Chennai";
}

async function employeeCountry() {
    return "India";
}

async function getEmployeeDetails() {
    const name = await employeeName();
    const address = await employeeAddress();
    const city = await employeeCity();
    const country = await employeeCountry();
    console.log(name +"\n"+ address +"\n"+ city +"\n"+ country);
}

getEmployeeDetails();
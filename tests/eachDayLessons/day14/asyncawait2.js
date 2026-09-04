async function getEmployeeName() {
    return "Chalcedony";
}

async function displayName(){
    const employee = await getEmployeeName();
    console.log(employee);
}

displayName();
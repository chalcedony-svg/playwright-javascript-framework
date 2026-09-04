async function getEmployee() {
    return "Chalcedony";
}

async function displayName() {
    const result = await getEmployee();
    console.log(result);
}

displayName();
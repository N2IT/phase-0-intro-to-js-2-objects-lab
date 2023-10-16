// Write your solution in this file!
//Assign an employee variable to an Object containing name and streetAddress keys

const employee = {
    name: "Tony",
    streetAddress: "8856 34th Ave SW",
}

function updateEmployeeWithKeyAndValue( obj, key, value) {
    const newObject = {...obj};
    newObject[key] = value;

    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value) {
    obj[key] = value;

    return obj;
}

function deleteFromEmployeeByKey (obj, key) {
    const newObject = {...obj};
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey (obj, key) {
    delete obj[key];
    return obj;
}
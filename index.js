// Write your solution in this file!
//Assign an employee variable to an Object containing name and streetAddress keys
const employee = {
    name: "Adam",
    streetAddress: "1980 Internet",
}

//Function should take in 3 arguments: employee object, a key, and a value.
//Should not mutate the employee; should return a new object that has been updated value for the key passed in.
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
}

const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Eve"
);

//this function should work the same as the prior but it should mutate the employee object
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

//this function should take ina employee object and a key
//it should delete the property with that key from the employee object. should not mutate the original employee object
function deleteFromEmployeeByKey(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
}

//should work the same as prior. but it should mutate the employee object.
function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value;
    return obj;
}
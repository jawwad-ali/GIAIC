"use strict";
/******************************** TUPLES ****************************************/
console.log("******************************** TUPLES ****************************************");
const shoppingList = ["Bread", 100, 250];
const employeeData = [
    [1, "Akram", "Rs 75,000"],
    [2, "Owais", 80000],
    [3, "Waqar", 180000],
];
for (let data of employeeData) {
    console.log("ID", data[0], "NAME", data[1], "SALARY", data[2]);
}
console.log(employeeData[1][1]);
console.log(employeeData[0][2]);

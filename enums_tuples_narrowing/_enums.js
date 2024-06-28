import { Add } from "../export_modules/types.js";
import Product from "../export_modules/types.js";
import chalk from "chalk";
/********************************* ENUM *********************************/
// Enums with indexes
var Color1;
(function (Color1) {
    Color1[Color1["Black"] = 0] = "Black";
    Color1[Color1["Purple"] = 1] = "Purple";
    Color1[Color1["Orange"] = 2] = "Orange";
})(Color1 || (Color1 = {}));
;
var colorName = Color1[0];
console.log(colorName);
// Enums with String values
var Direction;
(function (Direction) {
    Direction["North"] = "North";
    Direction["South"] = "South";
    Direction["East"] = "East";
    Direction["West"] = "West";
})(Direction || (Direction = {}));
const direction = Direction.West;
console.log(direction);
var UserStatus;
(function (UserStatus) {
    UserStatus["Active"] = "true";
    UserStatus["InActive"] = "false";
})(UserStatus || (UserStatus = {}));
let user = UserStatus.Active;
user = UserStatus.InActive;
console.log(user);
// Exercise for students
var TimeSlot;
(function (TimeSlot) {
    TimeSlot["Morning"] = "9 - 12";
    TimeSlot["AfterNoon"] = "2 - 5";
    TimeSlot["Evening"] = "7 - 10";
})(TimeSlot || (TimeSlot = {}));
;
// var colorName = Color5[0]; //Not allowed with const enums
var colorName2 = "Blue Kerry" /* Color5.Blue */;
console.log(colorName2);
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
// console.log( employeeData[1][1] );
// console.log( employeeData[0][2] );
/**************** Modules ****************/
/**
 * Initialize NPM project by npm init --yes
 * Open up the repo
 */
const myBook = {
    authorName: "Williams",
    bookName: "My Book One"
};
console.log(myBook);
let result = Add(10, 32);
console.log(result);
console.log(Product);
for (let data of Product) {
    console.log(data.name, data.price);
}
console.log(chalk.bgBlue("Hello World "));
console.log(chalk.magentaBright("Hello World "));
// narrowing
let percentage;
percentage = 75.3202635;
percentage = "seventy five";
if (typeof percentage == "number") {
    console.log("My type is number");
    // console.log(
    //     percentage.toFixed(2)
    // );
    console.log(Math.round(percentage));
}
else {
    // percentage = "seventy five"
    console.log("My Type is string");
    console.log(percentage.toUpperCase());
}
let age = Math.random() * 100;
console.log("age", age);
if (typeof age == "number") {
    let fix = age.toFixed(3);
    console.log(parseInt(fix));
}
// else {
//     age.toUpperCase()
// }

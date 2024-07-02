"use strict";
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

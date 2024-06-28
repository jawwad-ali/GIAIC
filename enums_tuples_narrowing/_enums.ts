/********************************* ENUM *********************************/
// Enums with indexes
enum Color1 { Black, Purple, Orange };
var colorName: string = Color1[0];
console.log(colorName);

// Enums with String values
enum Direction {
    North = "North",
    South = "South",
    East = "East",
    West = "West"
}

const direction: Direction = Direction.West;
console.log(direction);

enum UserStatus {
    Active = "true",
    InActive = "false"
}

let user: UserStatus = UserStatus.Active
user = UserStatus.InActive

console.log(user);



// Exercise for students
enum TimeSlot {
    Morning = "9 - 12",
    AfterNoon = "2 - 5",
    Evening = "7 - 10",
}

/********************************* CONST ENUM *********************************/
// Const enums are not accessd by indexes
const enum Color5 {
    Red = "Red Chilli",
    Green = "Green Chilli",
    Blue = "Blue Kerry"
};
// var colorName = Color5[0]; //Not allowed with const enums
var colorName2 = Color5.Blue;
console.log(colorName2);
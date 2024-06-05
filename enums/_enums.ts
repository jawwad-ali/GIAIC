import { Book, Add } from "../export_modules/types.js"
import Product from "../export_modules/types.js";
import chalk from "chalk"

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







/******************************** TUPLES ****************************************/
console.log(
    "******************************** TUPLES ****************************************"
);

// Tuples are fixed sized array

type ShoppingList = [string, number, number]

const shoppingList: ShoppingList = ["Bread", 100, 250]

// Defining the type // Do this example in the class

type DatabaseRecord = [number, string, string | number]
const employeeData: DatabaseRecord[] =
    [
        [1, "Akram", "Rs 75,000"],
        [2, "Owais", 80000],
        [3, "Waqar", 180000],
    ]

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
const myBook: Book = {
    authorName: "Williams",
    bookName: "My Book One"
} 
console.log(myBook);
let result = Add(10, 32)
console.log(result);


console.log(Product)
for (let data of Product) {
    console.log(data.name, data.price);
}



console.log(
    chalk.bgBlue("Hello World ")
);
console.log(
    chalk.magentaBright("Hello World ")
);





// narrowing
let percentage: string | number

percentage = 75.3202635
percentage = "seventy five"
if (typeof percentage == "number") {
    console.log("My type is number");

    // console.log(
    //     percentage.toFixed(2)
    // );

    console.log(
        Math.round(percentage)
    );

}
else {
    // percentage = "seventy five"
    console.log("My Type is string");
    console.log(
        percentage.toUpperCase()
    );
}





let age = Math.random() * 100
console.log("age",age);


if(typeof age == "number"){
    let fix = age.toFixed(3)

    console.log( parseInt(fix));
}
// else {
//     age.toUpperCase()
// }

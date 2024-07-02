"use strict";
// 0-99
// 0-999
// 0-10
// Indexing        0        1          2          3     
const teachers = ["Ali", "Ahmed", "Nabeel", "Emmad"];
console.log(teachers);
console.log(teachers[1]);
console.log(teachers[0]);
console.log(teachers[9999]);
// Add element at the end of an array
teachers.push("Hafiz");
console.log(teachers);
// Add element at the start of an array
teachers.unshift("Haseeb");
console.log(teachers);
teachers.pop();
console.log(teachers);
teachers.shift();
console.log(teachers);
/************************ Splice ************************/
let fruits = ["Apple", "Banana", "Orange", "Grapes", "Watermelon", "moli", "began", "gajjar", "mattar"];
console.log(fruits);
fruits.splice(5, 2); // For Removal
fruits.splice(5, 2, "Flowers", "Plants"); // For addition
fruits.splice(0); // Will remove all the elements in an array
fruits.splice(-1); // Will print the entire array
fruits.splice(0, 0, "Laptop", "Mobile"); // Wont Remove anything instead will add Laptop and Mobile 
console.log("SPLICE", fruits);
/************************ Slice ************************/
let splicedFruits = fruits.slice(1, 5);
console.log("splicedFruits", splicedFruits);
let numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [14, 15, 16],
    [24, 25, 26]
];
console.log(numbers[0]);
let number2 = [1, 2, 3, ["4", "5", "6"]];
let num = [
    [1, 2, 3,],
    ["apple", "orange"],
    [true, false]
];

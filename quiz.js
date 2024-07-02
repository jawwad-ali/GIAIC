"use strict";
let myAge;
myAge = 16; //narrowing
console.log(myAge);
console.log(typeof myAge);
let fruit = [
    ["apple", "banana"],
    ["cherry", ["date", "fig"]],
    ["grape", ["lemon", ["mango", "orange"]]]
];
console.log(fruit[2][2][1][1]);

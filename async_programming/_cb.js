"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const items = [
    { name: "bread", price: 100 },
    { name: "Eggs", price: 200 },
    { name: "Dahi", price: 50 }
];
// Callbacks without arguments
let First = (cb) => {
    console.log("First");
    cb();
};
let Second = () => {
    console.log("Second Func");
};
First(Second);
// With SetTimeout
function Items(callback) {
    console.log("Fetching Lists...");
    setTimeout(() => {
        callback();
    }, 2000);
}
const Shopping = () => {
    console.log(items);
};
Items(Shopping);
// CallBacks with args
function sum(cb, a, b) {
    let result = a + b;
    cb(result);
}
function dislpayRes(result) {
    console.log(result);
}
sum(dislpayRes, 5, 2);

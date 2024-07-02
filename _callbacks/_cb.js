"use strict";
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
function Hello(callback) {
    setTimeout(() => {
        console.log("Hello");
        callback();
    }, 2000);
}
function GoodBye() {
    console.log("Good Bye");
}
const leave = () => {
    // console.log("Leave");
    setTimeout(() => {
        console.log("I am leaving");
    }, 2000);
};
Hello(leave);
// CallBacks with args
function sum(cb, a, b) {
    let result = a + b;
    cb(result);
}
function dislpayRes(result) {
    console.log(result);
}
sum(dislpayRes, 5, 2);

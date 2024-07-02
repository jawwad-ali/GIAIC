"use strict";
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

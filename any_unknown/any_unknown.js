"use strict";
let firstName = "ali";
firstName = 23;
firstName = ["abc", 45, true];
firstName = () => true;
let val;
// let val2:number = val // Error
let val3 = (() => false);
// This will work on type casting
let abc;
abc = 44;
console.log(abc.toFixed());
function MakeError() {
    throw new Error("Awwwww :-( ");
}
console.log(MakeError());

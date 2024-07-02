"use strict";
/******************************************** LOOPS ********************************************/
// FOR LOOP
for (let tongueTwister = 1; tongueTwister <= 10; tongueTwister++) {
    console.log(`${tongueTwister} Kacha pappar pakka pappar`);
}
// While loops
let countdown = 10;
while (countdown > 0) {
    console.log(countdown);
    countdown--;
    if (countdown == 0) {
        console.log("Happy New Year");
    }
}
// For in loop on object (Prints the keys of the objects)
let player = {
    name: "babar",
    role: "batsman",
    age: 28
};
for (let key in player) {
    console.log(`  == FOR IN == ${key}  `);
}
// For Loop on array
let person = ["babar", "kohli", "Afridi", "rizwan"];
// console.log( person.length );
// 3
for (let i = 0; i < person.length; i++) {
    // console.log(i);
    console.log(person[i]);
}
// For of (While print the entire names of the array)
let fruits2 = ["Apple", "Banana", "Orange"];
for (let f of fruits2) {
    console.log(f);
}

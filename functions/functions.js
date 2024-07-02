"use strict";
// Rest Parameters
function Wallet(color, ...rest) {
    console.log(color, rest); // will show the array in the consoles
    console.log(color, ...rest); // will only show the console
}
Wallet("red", 2, 4, 6, 10);
// Exercise to students -Whatsapp Images 
// Exercise 2 File Upload
const Images = (...images) => {
    return images;
};
Images("imageONe.png", "imageTwo.png", "imageThree.png");
function add(arg1, arg2) {
    return arg1 + arg2;
}
console.log(add(1, 3));
console.log(add("Ali", "Jawwad"));

"use strict";
// Creating Variables
let ball = {
    diameter: 1001,
};
let sphere = {
    diameter: 10
};
ball = sphere;
sphere = ball;
let teacher = {
    name: "John",
    python: () => true,
};
let std = {
    name: "Hamza",
};
// IF there are more properties in LHS there will be error.
// LHS    RHS
// teacher = std //Error
// ITS OK TO HAVE MORE PROPERTIES IN RHS
// LHS = RHS
std = teacher;
// FOR TEACHER UNDERSTANDING
// Manual way
// teacher = {
//     name:"Ali",
//     // python: () => false
// }
// FOR TEACHER UNDERSTANDING
// std = {
//     name:"Zaheer",
//     python: () => true
// }
// CASE 2A
let emp = {
    name: "ali",
    id: 1
};
emp = {
    name: "Hunain",
    id: 2
};
// Error
// emp = {
//     name_person:"Akram",
//     id:3
// }
let x;
x = {
    id: 4,
    fullname: "ali jawwad"
};
x = {
    id: 45,
    country: "Pak",
    province: "Sindh"
};
x = {
    id: 20,
    laptop: "HP",
    specs: "256 SSD",
};
/*****
 * Fresh objects are NOT ASSIGNABLE is there are more properties.
 * Stale objects are ASSIGNABLE if there are more properties.
 *
 *
 *
 *
 * In TypeScript, "fresh objects" refer to objects created in place, usually as a literal, that TypeScript checks more strictly for excess properties. This means that when you create an object directly and pass it to a variable, TypeScript makes sure that this object only has the properties defined by the expected type and no extra ones.
 *
 *
 * The object is assigned to a variable first, making it a "stale" object. TypeScript allows the assignment to other object even though it has an extra property because it's not checking as strictly for excess properties in this case.

In summary, fresh objects are those that TypeScript checks very strictly against the expected type, ensuring they do not have any extra properties beyond what is defined. This helps catch potential errors when objects are created and used directly.
 */ 

"use strict";
/************** Inheritance ****************/
// Super Class / Parent Class
class Vehicle {
    constructor(name, tyres, engine) {
        this.name = name;
        this.tyres = tyres;
        this.engine = engine;
    }
}
// Car extends Vehicle
class NewCar extends Vehicle {
    constructor(name, tyres, engine) {
        super(name, tyres, engine);
    }
}
const car1 = new NewCar("Revo", 4, 2800);
console.log(car1);
// Bike extends Vehicle
class Bike extends Vehicle {
    constructor(name, tyres, engine) {
        super(name, tyres, engine);
    }
}
const MotorBike = new Bike("CD70", 2, "70CC");
console.log(MotorBike);
// Truck Exercise
// class Person {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         console.log(`What's for dinner?`);
//     }
//     speak() {
//         console.log(`My name is ${this.name}, I am ${this.age} years old`);
//     }
// }
// // Child Class
// class Engineer extends Person {
//     occupation: string
//     constructor(name: string, occupation: string, age: number) {
//         super(name, age)
//         this.occupation = occupation
//     }
//     personDetails() {
//         return `${this.name} is ${this.occupation} and his age is ${this.age}`
//     }
//     // Methods with parameters
//     work(dev: string) {
//         return `${dev}`
//     }
// }
// let engineer = new Engineer("Bilal", "Engineer", 26)
// console.log(engineer.personDetails());
// let ali = new Engineer("Ali", "Software Engineer", 23)
// console.log(ali.work("Front End Development"));

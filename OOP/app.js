// // Object-Oriented Programming (OOP) is a programming paradigm centered around the concept of "objects," which can contain data in the form of fields (attributes or properties) and code in the form of procedures (methods). OOP emphasizes the principles of encapsulation, inheritance, and polymorphism. Encapsulation involves bundling the data and methods that operate on the data within a single unit or class. Inheritance allows new classes to inherit properties and methods from existing ones, promoting code reuse. Polymorphism enables methods to process objects differently based on their data type or class. OOP enhances code modularity, readability, and maintainability.
// class Animal {
//     name: string;  // Property of the class
//     age: number;   // Property of the class
//     constructor(n: string, age: number) {
//         this.name = n; // 'this.name' refers to the property of the class
//         // 'name' is the parameter of the constructor
//         this.age = age;   // Similarly, 'this.age' refers to the property of the class
//         // 'age' is the parameter of the constructor
//     }
//     speak(): void {
//         console.log(`${this.name} makes a noise.`); // 'this.name' refers to the instance's 'name' property
//     }
//     walk(canWalk: string): string {
//         console.log(`${this.name} is ${canWalk}`);
//         return canWalk
//     }
// }
// let dog = new Animal("Buddy", 5);
// dog.speak(); // Output: Buddy makes a noise.
// let cat = new Animal("Kitten", 50)
// cat.walk("walking");
// Base class and Obj without constructor
class Car {
    //Instance Variables OR Class properties
    make = "Honda";
    model = 2024;
    variant = "Civic 1500CC Turbo";
}
// Creating an obj
let car = new Car();
console.log(car.make);
class MyCar {
    name;
    price;
    // A constructor function is a class function responsible for initializing a class’s instance variables.
    constructor(n, p) {
        this.name = n;
        this.price = p;
    }
    getCarDetails() {
        return `${this.name} is of price ${this.price}`;
        // console.log( `${this.name} is of price ${this.price}` );
    }
}
let myCar = new MyCar("Revo", "Rs 15000000");
console.log(myCar);
console.log(myCar.name);
console.log(myCar.price);
console.log(myCar.getCarDetails());
/************** Inheritance ****************/
// Super Class / Parent Class
class Vehicle {
    name;
    tyres;
    engine;
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
// Read Only
class Student2 {
    name;
    email;
    timings;
    rollNo = 123456;
    picture;
    constructor(n, e, t, p) {
        this.name = n;
        this.timings = t;
        this.email = e;
        this.picture = p;
    }
}
const data = new Student2("Ali", "7-10", "ali@yahoo.com", "myself.png");
console.log("Student Data ReadOnly", data);
/**
 * Encapsulation
    ** Getter
    ** Setter
 * Abstraction
 * Polymorphism
 */
/*************** Polymorphism ***************/
class Animal {
    name;
    constructor(n) {
        this.name = n;
    }
    makeSound() {
        return 'Animal making sound';
    }
}
class Lion extends Animal {
    constructor(name) {
        super(name);
    }
    //Polymorphism
    makeSound() {
        return `Lion is Roaring`;
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    //Polymorphism
    makeSound() {
        return `Cat sound is Meow`;
    }
}
let cat = new Cat("Kitten");
console.log(cat.makeSound());
let lion = new Lion("Sherruuu");
console.log("LION", lion.makeSound());
/******************** ABSTRACT CLASS ********************/
class Laptop {
    make;
    Ram;
    screen;
    constructor(make, Ram, screen) {
        this.make = make;
        this.Ram = Ram;
        this.screen = screen;
    }
    // Function implementation will directly called as it is inherited
    powerOn() {
        return "Press power button to power On";
    }
}
// Cannot make instance of a abstract class
// const laptop = new Laptop("Hp" , "16GB" , 15.6)
class HP extends Laptop {
    constructor(make, Ram, screen) {
        super(make, Ram, screen);
    }
    SSD() {
        return "1TB";
    }
}
const hp = new HP("Hp", "16GB", 15.6);
console.log(hp);
// Function implementation will directly called as it is inherited
console.log(hp.powerOn());
class Dell extends Laptop {
    constructor(make, Ram, screen) {
        super(make, Ram, screen);
    }
    SSD() {
        return "512GB";
    }
}
const dell = new Dell("Dell", "32GB", 17.3);
console.log(dell.SSD());
/******************* ENCAPSULATION *******************/
class Bank {
    balance;
    customerName;
    accountNumber;
    constructor(balance, customerName, ac) {
        this.balance = balance;
        this.customerName = customerName;
        this.accountNumber = ac;
    }
    getBalance() {
        return this.balance;
    }
}
let bank = new Bank(500, "Ali Jawwad", 10);
// bank.balance = 120 // Error
console.log(bank);
// Protected
class MeezanBank extends Bank {
    constructor(balance, customerName, ac) {
        super(balance, customerName, ac);
        this.customerName = customerName;
        this.accountNumber = ac;
    }
}
let mzb = new MeezanBank(50000, "John Doe", 1000);
console.log("/************************************ Getter/Setter  ************************************/");
class HB {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    get getbalance() {
        return this.balance;
    }
    set deposit(amount) {
        if (amount > 0) {
            console.log(this.balance = this.balance + amount);
        }
    }
}
const hb = new HB(120);
//Deposit value. setter function and getter function are called like variables
hb.deposit = 70;
console.log(hb);
//Getter
console.log("Getter", hb.getbalance);
console.log("/**************************** STATIC ****************************");
// class MyStaticClass {
//     static courseName = "GIAIC"
//     static diretion = "Opp. Polo Ground"
//     static inc = 1
// }
// let course = MyStaticClass.courseName
// let map = MyStaticClass.diretion
// console.log(course);
// console.log(map);
// console.log("Cheque No:", MyStaticClass.inc++);
// console.log("Cheque No:", MyStaticClass.inc++);
// console.log("Cheque No:", MyStaticClass.inc++);
// console.log("Cheque No:", MyStaticClass.inc++);
// console.log("Cheque No:", MyStaticClass.inc++);
// console.log("Cheque No:", MyStaticClass.inc++);
class Cheque {
    amount;
    static chequeNo = 1;
    constructor(amount) {
        this.amount = amount;
    }
    // chequeNoInc() {
    //     return Cheque.chequeNo++
    // }
    static bankName(name) {
        return name;
    }
}
let c = new Cheque("Rs 25,000");
// console.log("Cheque",Cheque.chequeNo++);
console.log(c, "Cheque Number", Cheque.chequeNo++, Cheque.bankName("Mezan Bank"));
let c2 = new Cheque("Rs 37,000");
console.log(c2, "ChequeNumber", Cheque.chequeNo++, Cheque.bankName("HBL"));
export {};
// console.log(c2, c.chequeNoInc());

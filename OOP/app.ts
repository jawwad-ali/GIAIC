// // Object-Oriented Programming (OOP) is a programming paradigm centered around the concept of "objects," which can contain data in the form of fields (attributes or properties) and code in the form of procedures (methods). OOP emphasizes the principles of encapsulation, inheritance, and polymorphism. Encapsulation involves bundling the data and methods that operate on the data within a single unit or class. Inheritance allows new classes to inherit properties and methods from existing ones, promoting code reuse. Polymorphism enables methods to process objects differently based on their data type or class. OOP enhances code modularity, readability, and maintainability.

class Animals {
    name: string;  // Property of the class
    age: number;   // Property of the class

    constructor(n: string, age: number) {
        this.name = n; // 'this.name' refers to the property of the class
        // 'name' is the parameter of the constructor
        this.age = age;   // Similarly, 'this.age' refers to the property of the class
        // 'age' is the parameter of the constructor
    }

    speak(): void {
        console.log(`${this.name} makes a noise.`); // 'this.name' refers to the instance's 'name' property
    }

    walk(canWalk: string): string {
        console.log(`${this.name} is ${canWalk}`);
        return canWalk
    }

}

let dog = new Animals("Buddy", 5);
dog.speak(); // Output: Buddy makes a noise.

let cats = new Animals("Kitten", 50)
cats.walk("walking");



// Base class and Obj without constructor
class Car {

    //Instance Variables OR Class properties
    make: string = "Honda"
    model: number = 2024
    variant: string = "Civic 1500CC Turbo"
}

// Creating an obj
let car = new Car()
console.log(car.make);

class MyCar {
    name: string
    price: string

    // A constructor function is a class function responsible for initializing a class’s instance variables.
    constructor(n: string, p: string) {
        this.name = n
        this.price = p
    }

    getCarDetails() {
        return `${this.name} is of price ${this.price}`
        // console.log( `${this.name} is of price ${this.price}` );
    }

}

let myCar = new MyCar("Revo", "Rs 15000000")
console.log(myCar);

console.log(myCar.name);
console.log(myCar.price);

console.log(myCar.getCarDetails());
"use strict";
/*************** Polymorphism ***************/
class Animal {
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

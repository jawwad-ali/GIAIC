"use strict";
/******************** ABSTRACT CLASS ********************/
class Laptop {
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

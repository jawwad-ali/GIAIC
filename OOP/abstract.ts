/******************** ABSTRACT CLASS ********************/
abstract class Laptop {
    make: string
    Ram: string
    screen: number

    constructor(make: string, Ram: string, screen: number) {
        this.make = make
        this.Ram = Ram
        this.screen = screen
    }

    abstract SSD(): string

    // Function implementation will directly called as it is inherited
    powerOn(): string {
        return "Press power button to power On"
    }
}
// Cannot make instance of a abstract class
// const laptop = new Laptop("Hp" , "16GB" , 15.6)

class HP extends Laptop {
    constructor(make: string, Ram: string, screen: number) {
        super(make, Ram, screen)
    }
    SSD(): string {
        return "1TB"
    }
}

const hp = new HP("Hp", "16GB", 15.6)
console.log(hp);
// Function implementation will directly called as it is inherited
console.log(hp.powerOn());


class Dell extends Laptop {
    constructor(make: string, Ram: string, screen: number) {
        super(make, Ram, screen)
    }
    SSD(): string {
        return "512GB"
    }
}
const dell = new Dell("Dell", "32GB", 17.3)
console.log(dell.SSD());
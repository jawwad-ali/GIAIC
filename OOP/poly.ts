/*************** Polymorphism ***************/
class Animal {
    name: string

    constructor(n: string) {
        this.name = n
    }

    makeSound() {
        return 'Animal making sound'
    }
}

class Lion extends Animal {
    constructor(name: string) {
        super(name)
    }

    //Polymorphism
    makeSound(): string {
        return `Lion is Roaring`
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name)
    }

    //Polymorphism
    makeSound(): string {
        return `Cat sound is Meow`
    }
}

let cat = new Cat("Kitten")
console.log(
    cat.makeSound()
);

let lion = new Lion("Sherruuu")
console.log(
    "LION", lion.makeSound()
);

// Type Can be used with all the things like variable , arrays , functions, objects
// Type Alias on String. Can also be applied on numbers and booleans
type Student = string
type age = number
type isLoggedIn = boolean

const firstName: Student = "Danish"
const age: age = 20
const isLoggedIn: isLoggedIn = true


// Type Alias on Array
type ChattarPattar = string[]
type MainCourse = string[]

const chattarPattar: ChattarPattar = ["Slanty", "Top pops", "Cocomo"]
console.log(chattarPattar);

const mainCourse: MainCourse = ["Halwa Puri", "Biryani", "Nihari", "Pie"]
console.log(mainCourse);

// Type Alias on obj

const car: {
    carName: string
    carColor: string
} = {
    carName: "Revo",
    carColor: "black"
}

type Car = {
    make: string
    model: number
    variant: string
}

const myCar: Car = {
    make: "Toyota",
    model: 2024,
    variant: "1800CC"
    // name: "Black Revo" // While throw the error because name type doesnot exist 
}

// Assign task to Students to make type aliases and assign it to function return type.













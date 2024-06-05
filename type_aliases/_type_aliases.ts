
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



/****************************************** Type Union ******************************************/
let rollNumber: string | number | boolean
rollNumber = 20
rollNumber = "55"
rollNumber = false


/****************************** Type Literals **********************************/
let size: "small" | "medium" | "large"
size = "large"
size = "medium"
size = "small"
// size = "Mega" // Error MEga does not exist


let userStatus: "logged In" | "Logged Out" = "logged In"
console.log(userStatus);


// Exercise for students
let trafficLights: "red" | "green" | "yellow" = "red"
trafficLights = "green"
trafficLights = "yellow"
// trafficLights = "purple"



/************************************ Type Intersection ********************************************/
type Student3 = {
    studentname: string
    rollNo: number
}

type Teacher = {
    teachername: string
    teacheremail: string
}

type ClassRoom = Student3 & Teacher

const classRoom: Student3 & Teacher = {
    teacheremail: "ali@gmail.com",
    teachername: "Ali",

    studentname: "Danish",
    rollNo: 3230
}


// Interface Can only be used with objects

// Wrong. Because I am using interface with variables they are only for object purposes

// interface Teacher  {name:string}
// const myName:Teacher = "Ali"

/******************************************* Nested Objects *******************************************/
interface Product {
    productName: string
    productPrice: number
}

interface Customer {
    customerName: string
    product: Product
}

// Customer Slip
const list: Customer[] = [{
    customerName: "Kohli",
    product: {
        productName: "Bat",
        productPrice: 1500000
    }
},
{
    customerName: "Rohit",
    product: {
        productName: "Bat",
        productPrice: 255500000
    }
},
]

console.log(list[0].customerName);
console.log(list[0].product.productName);
console.log(list[0].product.productPrice);


const filteredCustomer = list.filter((banda) => banda.customerName == "Kohli")
console.log(filteredCustomer);

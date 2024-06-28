const firstName = "Danish";
const age = 20;
const isLoggedIn = true;
const chattarPattar = ["Slanty", "Top pops", "Cocomo"];
console.log(chattarPattar);
const mainCourse = ["Halwa Puri", "Biryani", "Nihari", "Pie"];
console.log(mainCourse);
// Type Alias on obj
const car = {
    carName: "Revo",
    carColor: "black"
};
const myCar = {
    make: "Toyota",
    model: 2024,
    variant: "1800CC"
    // name: "Black Revo" // While throw the error because name type doesnot exist 
};
// Assign task to Students to make type aliases and assign it to function return type.
/****************************************** Type Union ******************************************/
let rollNumber;
rollNumber = 20;
rollNumber = "55";
rollNumber = false;
/****************************** Type Literals **********************************/
let size;
size = "large";
size = "medium";
size = "small";
// size = "Mega" // Error MEga does not exist
let userStatus = "logged In";
console.log(userStatus);
// Exercise for students
let trafficLights = "red";
trafficLights = "green";
trafficLights = "yellow";
const classRoom = {
    teacheremail: "ali@gmail.com",
    teachername: "Ali",
    studentname: "Danish",
    rollNo: 3230
};
// Customer Slip
const list = [{
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
];
console.log(list[0].customerName);
console.log(list[0].product.productName);
console.log(list[0].product.productPrice);
const filteredCustomer = list.filter((banda) => banda.customerName == "Kohli");
console.log(filteredCustomer);
export {};

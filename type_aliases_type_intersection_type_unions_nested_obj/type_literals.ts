
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
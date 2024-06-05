/******************************************** LOOPS ********************************************/
// FOR LOOP
for(let tongueTwister = 1; tongueTwister <= 10; tongueTwister++){
    console.log(`${tongueTwister} Kacha pappar pakka pappar`);
}

// While loops
let countdown = 10
while(countdown > 0){
    console.log(countdown);
    countdown--
    if(countdown == 0){
        console.log("Happy New Year");
    }
}


// For in loop on object (Prints the keys of the objects)
let player = {
    name:"babar",
    role:"batsman",
    age:28
}
for(let key in player){
    console.log(`  == FOR IN == ${key}  `);
}

// For Loop on array
let person:string[] = ["babar" , "kohli" , "Afridi", "rizwan"]

// console.log( person.length );
                    // 3
for(let i = 0; i < person.length; i++ ){
    // console.log(i);
    console.log(person[i]); 
}

// For of (While print the entire names of the array)
let fruits2 = ["Apple" , "Banana" , "Orange"]
for(let f of fruits2 ){
    console.log(f);
}


/******* Wrong Password */
console.log("=============Wrong password =============");


let password = "1234" // Actual password
for(let i = 1; i <= 4; i++){
    console.log(i);
    // password = "456"
    // password = "756"
    // password = "125"
    // password = "abc"
    
    // console.log(password[i]);
    
    if(password != "abc1001" && i == 4){
        console.log("you are blocked");
    }
}






// let correctPassword = "pak123"; // Replace with your actual password
// let attempts = 0; // Keeps track of password attempts

// for (let i = 0; i < 3; i++) {
//   let enteredPassword = prompt("Enter your password:");

//   if (enteredPassword === correctPassword) {
//     console.log("You are logged in!");
//     break; // Exit the loop if password is correct
//   } else {
//     attempts++;
//     console.log("Incorrect password. Please try again.");
//   }
// }

// if (attempts === 3) {
//   console.log("You are blocked! Try again later.");
// }


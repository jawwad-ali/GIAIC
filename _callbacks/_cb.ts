// Callbacks without arguments
// First just make them understand the syntax of callback. Dont write any setTimeout.
let First = (cb:()=>void) => {
    console.log("First");
    cb()
}

let Second = () => {
    console.log("Second Func");
    // callback()
}

const Third = () => {
    console.log("Third Func");
}

First(Second)
// Second(Third)


// With SetTimeout
function Hello(callback: () => void) {
    setTimeout(() => {
        console.log("Hello");
        callback()
    }, 2000)
}


function GoodBye() {
    console.log("Good Bye");
}
    
const leave = () => {
    // console.log("Leave");
    setTimeout(() => {
        console.log("I am leaving");
    },2000)
}

Hello(leave)




// CallBacks with args

// function sum(cb: (res: number) => void, a: number, b: number) {
//     let result = a + b
//     cb(result)
// }

// function dislpayRes(result: number) {
//     console.log(result);

// }
// sum(dislpayRes, 5, 2)









// function myCallback(text: string) {
//     console.log("insside by callback" + text);
// }

// function CallingFunction(initialText: string, cb: (text: string) => void) {
//     cb(initialText)
// }

// CallingFunction("Initial Text", myCallback)



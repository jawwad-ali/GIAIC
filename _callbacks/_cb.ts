// Callbacks without arguments
let First = (cb: () => void) => {
    console.log("First");
    cb()
}

let Second = () => {
    console.log("Second Func");
}

First(Second)

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
    }, 2000)
}

Hello(leave)



// CallBacks with args
function sum(cb: (res: number) => void, a: number, b: number) {
    let result = a + b
    cb(result)
}

function dislpayRes(result: number) {
    console.log(result);

}
sum(dislpayRes, 5, 2)
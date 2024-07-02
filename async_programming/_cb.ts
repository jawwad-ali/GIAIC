const items = [
    { name: "bread", price: 100 },
    { name: "Eggs", price: 200 },
    { name: "Dahi", price: 50 }
]

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
function Items(callback: () => void) {
    console.log("Fetching Lists...");
    setTimeout(() => {
        callback()
    }, 2000)
}

const Shopping = () => {
    console.log(items);
}

Items(Shopping)

// CallBacks with args
function sum(cb: (res: number) => void, a: number, b: number) {
    let result = a + b
    cb(result)
}

function dislpayRes(result: number) {
    console.log(result);

}
sum(dislpayRes, 5, 2)
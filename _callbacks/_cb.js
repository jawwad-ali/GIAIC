// // Callbacks without arguments
// // First just make them understand the syntax of callback. Dont write any setTimeout.
// let First = (cb: () => void) => {
//     console.log("First");
//     cb()
// }
// let Second = () => {
//     console.log("Second Func");
//     // callback()
// }
// First(Second)
// // Second(Third)
// // // With SetTimeout
// function Hello(callback: () => void) {
//     setTimeout(() => {
//         console.log("Hello");
//         callback()
//     }, 2000)
// }
// function GoodBye() {
//     console.log("Good Bye");
// }
// const leave = () => {
//     // console.log("Leave");
//     setTimeout(() => {
//         console.log("I am leaving");
//     }, 2000)
// }
// Hello(leave)
// // CallBacks with args
// // function sum(cb: (res: number) => void, a: number, b: number) {
// //     let result = a + b
// //     cb(result)
// // }
// // function dislpayRes(result: number) {
// //     console.log(result);
// // }
// // sum(dislpayRes, 5, 2)
// // function myCallback(text: string) {
// //     console.log("insside by callback" + text);
// // }
// // function CallingFunction(initialText: string, cb: (text: string) => void) {
// //     cb(initialText)
// // }
// // CallingFunction("Initial Text", myCallback)
// create tsconfig file tsc --init , targetES2022
const MakePromise = () => {
    return new Promise((resolve, reject) => {
        let isError = false;
        if (isError) {
            setTimeout(() => {
                reject("There is an Error");
            }, 2000);
        }
        else {
            setTimeout(() => {
                resolve("SuccessFul Response");
            }, 2000);
        }
    });
};
MakePromise()
    .then((response) => {
    console.log(response);
})
    .catch((err) => {
    console.log("Catch Error", err);
});
// Explain Chaining and finally
let isVictory = true;
const Cricket = () => {
    return new Promise((resolve, reject) => {
        if (isVictory) {
            setTimeout(() => {
                resolve("You Won");
            }, 2000);
        }
        else {
            setTimeout(() => {
                reject("Tum se na ho paye ga");
            }, 2000);
        }
    });
};
// // Passing the Pillow Concept
Cricket()
    .then((res) => {
    console.log(res);
    return "Man of the Match Babar Azam";
})
    .catch((error) => {
    console.log(error);
})
    .then((res) => {
    console.log(res);
    return "Babar scored 100 off 40 balls";
})
    .catch((error) => {
    console.log(error);
})
    .then((res) => {
    console.log(res);
    return "Pakistan Won the World Cup";
})
    .catch((error) => {
    console.log(error);
})
    .finally(() => {
    console.log("Flight Pakro");
});
// //ASYNC
const getData = async () => {
    try {
        let res = await Cricket();
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log("Flight Pakro");
    }
    return "Into the Next tournament";
};
getData();
const Fn = async () => {
    try {
        const data = await getData();
        console.log("data", data);
    }
    catch (err) {
        console.log(err);
    }
};
const res = Fn();
console.log(res);
export {};

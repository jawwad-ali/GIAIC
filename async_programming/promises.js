"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

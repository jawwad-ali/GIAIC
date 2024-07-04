const isVictory = false
const CricketMatch = () => {
    return new Promise((resolve, reject) => {
        if (isVictory) {
            setTimeout(() => {
                resolve("You Won")
            }, 2000)
        }
        else {
            setTimeout(() => {
                reject("Tum se na ho paye ga")
            }, 2000)
        }
    })
}

//ASYNC
const getData = async () => {
    try {
        let res = await CricketMatch()
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log("Flight Pakro");
    }
    return "Into the Next tournament"
}

// getData()


const Fn = async () => {
    try {
        const data = await getData()
        console.log("data", data);
    }
    catch (err) {
        console.log(err);
    }
}

const res = Fn()
console.log(res);





// Examples 2
let isCow = false
const findAnimal = () => {
    return new Promise((resolve, reject) => {
        if (isCow) {
            resolve("Cow Found")
        }
        else {
            reject("No Cow Found")
        }
    })
}

findAnimal()
    .then((res) => {
        console.log(res);
        return "Rs 150,000"
    })

    .then((res) => {
        console.log(res);
    })

    .catch((error) => {
        console.log(error);
        return "High price. Found Bakra"
    })

    .then((res) => {
        console.log(res);
    })

    .finally(() => {
        console.log("Qurbani");
    })

// function add() {
//     return 5 + 6
// }
// add()






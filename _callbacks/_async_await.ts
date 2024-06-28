 //ASYNC
const getData = async () => {
    try {
        let res = await Cricket()
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

getData()


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
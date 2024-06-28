/******************************** TUPLES ****************************************/
console.log(
    "******************************** TUPLES ****************************************"
);

// Tuples are fixed sized array

type ShoppingList = [string, number, number]

const shoppingList: ShoppingList = ["Bread", 100, 250]

// Defining the type // Do this example in the class

type DatabaseRecord = [number, string, string | number]
const employeeData: DatabaseRecord[] =
    [
        [1, "Akram", "Rs 75,000"],
        [2, "Owais", 80000],
        [3, "Waqar", 180000],
    ]

for (let data of employeeData) {
    console.log("ID", data[0], "NAME", data[1], "SALARY", data[2]);
}

console.log( employeeData[1][1] );
console.log( employeeData[0][2] );

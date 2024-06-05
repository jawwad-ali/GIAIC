export interface Book {
    authorName: string
    bookName: string
}

console.log("Type console is here");

export function Add(num1: number, num2: number): number {
    return num1 + num2
}

let Product = [
    { name: "Milk", price: 100 },
    { name: "Eggs", price: 250 },
]
export default Product
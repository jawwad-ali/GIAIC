// Rest Parameters
function Wallet(color: string, ...rest: number[]) {
    console.log(color, rest); // will show the array in the consoles
    console.log(color, ...rest); // will only show the console
}
// Wallet("red" , 2 , 4 , 6 , 10)

// Exercise to students -Whatsapp Images 
// Exercise 2 File Upload
const Images = (...images: string[]) => {
    return images
}
// Images("imageONe.png" , "imageTwo.png" , "imageThree.png")



// Functions Overloads
function add(arg1: number, arg2: number): number
function add(arg1: string, arg2: string): string

function add(arg1: any, arg2: any): any {
    return arg1 + arg2;
}
console.log(
    add(1, 3)
);

console.log(
    add("Ali", "Jawwad")
);


// DOnt do this.

// 30 - 5 - 2024
// 05 - 30 

// function myDate(month:number , date:number , year:number):number
// function myDate(date:number , month:number | string , year:number):string

// function myDate(month:any , year:any , date:any):any{
//     return `${month} ${date} ${year} `
// }


// console.log(
//     myDate(5 , 30 , 2024)
// );

// console.log(
//     30 , "June" , 2024
// );














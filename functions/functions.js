// Rest Parameters
function Wallet(color, ...rest) {
    console.log(color, rest); // will show the array in the consoles
    console.log(color, ...rest); // will only show the console
}
// Wallet("red" , 2 , 4 , 6 , 10)
// Exercise to students -Whatsapp Images 
// Exercise 2 File Upload
const Images = (...images) => {
    return images;
};
function add(arg1, arg2) {
    return arg1 + arg2;
}
console.log(add(1, 3));
console.log(add("Ali", "Jawwad"));
export {};
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

let firstName:any = "ali"
firstName = 23
firstName = ["abc" , 45 , true]
firstName = () => true

let val:unknown

// let val2:number = val // Error

let val3:() => boolean = (() => false) as () => boolean
// This will work on type casting




function MakeError():never{
    throw new Error("Awwwww :-( ")
}

console.log( MakeError() );
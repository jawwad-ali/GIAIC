class Cheque {
    amount: string
    static chequeNo: number = 1 
    constructor(amount: string) {
        this.amount = amount
    }
}

let c = new Cheque("Rs 25,000")
console.log(c, "Cheque Number", Cheque.chequeNo++);

let c2 = new Cheque("Rs 37,000")
console.log(c2, "ChequeNumber", Cheque.chequeNo++);


console.log("/**************************** STATIC ****************************");
class MyStaticClass {
    static courseName = "GIAIC"
    static diretion = "Opp. Polo Ground"
    static inc = 1
}
let course = MyStaticClass.courseName
let map = MyStaticClass.diretion

console.log(course);
console.log(map);

console.log("Cheque No:", MyStaticClass.inc++);
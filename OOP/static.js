"use strict";
class Cheque {
    constructor(amount) {
        this.amount = amount;
    }
}
Cheque.chequeNo = 1;
let c = new Cheque("Rs 25,000");
console.log(c, "Cheque Number", Cheque.chequeNo++);
let c2 = new Cheque("Rs 37,000");
console.log(c2, "ChequeNumber", Cheque.chequeNo++);
console.log("/**************************** STATIC ****************************");
class MyStaticClass {
}
MyStaticClass.courseName = "GIAIC";
MyStaticClass.diretion = "Opp. Polo Ground";
MyStaticClass.inc = 1;
let course = MyStaticClass.courseName;
let map = MyStaticClass.diretion;
console.log(course);
console.log(map);
console.log("Cheque No:", MyStaticClass.inc++);

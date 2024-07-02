"use strict";
/******************* ENCAPSULATION *******************/
class Bank {
    constructor(balance, customerName, ac) {
        this.balance = balance;
        this.customerName = customerName;
        this.accountNumber = ac;
    }
    getBalance() {
        return this.balance;
    }
}
let bank = new Bank(500, "Ali Jawwad", 10);
// bank.balance = 120 // Error
console.log(bank);
// Protected
class MeezanBank extends Bank {
    constructor(balance, customerName, ac) {
        super(balance, customerName, ac);
        this.customerName = customerName;
        this.accountNumber = ac;
    }
}
let mzb = new MeezanBank(50000, "John Doe", 1000);

/******************* ENCAPSULATION *******************/
class Bank {
    private balance: number
    public customerName: string
    protected accountNumber: number

    constructor(balance: number, customerName: string, ac: number) {
        this.balance = balance
        this.customerName = customerName
        this.accountNumber = ac
    }

    getBalance() {
        return this.balance
    }
}
let bank = new Bank(500, "Ali Jawwad", 10)
// bank.balance = 120 // Error
console.log(bank);


// Protected
class MeezanBank extends Bank {

    constructor(balance: number, customerName: string, ac: number) {
        super(balance, customerName, ac)
        this.customerName = customerName
        this.accountNumber = ac
    }
}
let mzb = new MeezanBank(50000, "John Doe", 1000)
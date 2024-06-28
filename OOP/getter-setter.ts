console.log("/************************************ Getter/Setter  ************************************/");
class HB {
    private balance: number
    constructor(balance: number) {
        this.balance = balance
    }
    get getbalance() {
        return this.balance
    }

    set deposit(amount: number) {
        if (amount > 0) {
            console.log(
                this.balance = this.balance + amount
            );
        }
    }
}

const hb = new HB(120)
//Deposit value. setter function and getter function are called like variables
hb.deposit = 70
console.log(hb);

//Getter
console.log(
    "Getter",
    hb.getbalance
);
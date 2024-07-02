"use strict";
// Read Only
class Student2 {
    constructor(n, e, t, p) {
        this.rollNo = 123456;
        this.name = n;
        this.timings = t;
        this.email = e;
        this.picture = p;
    }
}
const data = new Student2("Ali", "7-10", "ali@yahoo.com", "myself.png");
console.log("Student Data ReadOnly", data);

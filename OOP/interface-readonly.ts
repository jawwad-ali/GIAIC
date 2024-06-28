
interface StudentProps {
    name: string
    email: string
    timings: string
}

// Read Only
class Student2 implements StudentProps {
    name: string
    email: string;
    timings: string
    readonly rollNo: number = 123456
    picture: string

    constructor(n: string, e: string, t: string, p: string) {
        this.name = n
        this.timings = t
        this.email = e
        this.picture = p
    }
}
const data = new Student2("Ali", "7-10", "ali@yahoo.com", "myself.png")
console.log("Student Data ReadOnly", data);
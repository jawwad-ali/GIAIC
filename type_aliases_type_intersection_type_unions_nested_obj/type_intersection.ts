/************************************ Type Intersection ********************************************/
type Student3 = {
    studentname: string
    rollNo: number
}

type Teacher = {
    teachername: string
    teacheremail: string
}

type ClassRoom = Student3 & Teacher

const classRoom: Student3 & Teacher = {
    teacheremail: "ali@gmail.com",
    teachername: "Ali",

    studentname: "Danish",
    rollNo: 3230
}
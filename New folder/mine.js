class student
{
    static counter=0
    constructor ( StudentName , StudentAge , StudentGrade)
    {
        this.sName=StudentName;
        this.sAge=StudentAge;
        this.sGrade=StudentGrade;

        student.counter=++
        console.log(student.counter)

    }
    attLec(){
        console.log("Welcome at lecture")
    }
    solAss(){
        console.log("Hello")
    }
}

let s1=student("Ahmed", 25 , 5);
let s2=student("Rawan", 25 , 5);
let s3=student("Karem", 25 , 5);
let s4=student("Layla", 25 , 5);


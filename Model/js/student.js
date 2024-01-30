
export default class Hamada
{

    static counter = 0

    constructor(studentName ,studentAge , studentGrade )
    {
        this.sName = studentName;
        this.sAge = studentAge;
        this.hamada = studentGrade;

        Student.counter++

        console.log(Student.counter) 
    }

     attLEc()
    {
        console.log("Hii from AttLEc")
    }

    solveAss()
    {
        console.log("Hii from Solve Ass")
    }

}



class Person{
    // constructor()
    // {

    // }
    eat()
    {
        console.log("eat")
    }
    sleep()
    {
        console.log("sleep")
    }
    work()
    {
        console.log("do nothing")
    }
}
class Engineer extends Person
{
    constructor(branch)
    {
        super(); //to invoke parent class constructor
        this.Branch=branch;
    }
    work() //overriding  
    {
        super.eat(); //to invoke eat method
        console.log("solve problems, build projects");
    }
}
let Dhruv=new Engineer("CSE");
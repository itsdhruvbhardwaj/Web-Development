/*1.You are creating a website for your college, create a class User with two properties name and email. Tt also has
a method called viewdata() that allows user to view website data.
2.Create a new Class called admin which inherits from user add a new method called added data to the admin 
that allows it to edit website data.
*/

let data="this is data"
class User{
    constructor(name, email)
    {
        this.name=name;
        this.email=email
    }
    viewdata()
    {
        console.log(data)
    }
}

class Admin extends User
{
    constructor(name, email)
    {
        super(name, email)
    }
    editdata()
    {
        data="new edited data"
    }
}
let Student1 = new User("Dhruv", "@dhruv")
let Student2 = new User("Mann", "@mann")

let admin = new Admin("Admin", "@admin")
const details={
    department:"Cse",
    tax()
    {
        console.log("tax is 10%")
    },
    //or
    tax2:function(){
        console.log("tax is 10%")
    }
}

const employee={
    name:"Dhruv"
}
employee.__proto__=details; //we can use tax defined in details in different object i.e employee
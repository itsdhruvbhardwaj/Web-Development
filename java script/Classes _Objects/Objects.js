let details={
    fullname: "Dhruv Sharma",
    age:20,
    printMarks: function() {
        console.log("Marks= ", this.marks)

    },
};

//prototyping
const calTax={
    tax(){
        console.log("Tax is 10%")
    }
}

const emp1={
    salary: 1000
};
const emp2={
    salary: 2000
};
const emp3={
    salary: 20000,
    tax(){
        console.log("Tax is 20%")
    }
};

emp1.__proto__=calTax;
emp2.__proto__=calTax;
emp3.__proto__=calTax; //will not execute
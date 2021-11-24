interface MyPerson {
    fname: string;
    lname: string;
    age?: number; // ? makes it opetional
}
let Myemp: MyPerson = {
    fname: "Bhumi",
    lname: "asutkar",
    age: 80
}

/********Tuple*******/

var empId: number = 1;
var empName: string = "Steve";

// Tuple type variable 
var employee: [number, string] = [1, "Steve"];
employee.push(2, "Bill");

console.log('/********Tuple*******/');
console.log(employee)
/*

supper keyword
- we extend react class from React.Component
- parent constructor need to call before child class, so supper keyword invokes the constructer of parent first
it make sure if u call any methode on parent class 	, parent class is all successfully setup

*/
class Person {
    constructor(name) {
        console.log('HI ', name);
        console.log('parent this ', this)
    }
    getID() {
        return 10;
    }
}

class Emp extends Person {
    constructor(name) {
        super(name);
        console.log('Hello', name);
        console.log('Child this ', this)
    }
    getID() {
        return super.getID();
    }
}

let e = new Emp('Bhumi');
console.log('here is output ', e);
console.log('-------------------');

let p = new Person('Bhumi');
console.log('here is output ', e);

/************ Set and Map ************/

//Sets are an unordered collection of unique elements

// let mySet = new Set();

// mySet.add("Bhumi");
// mySet.add("Bhumi");

//console.log('mySet ', mySet);

/***********  array *************/
let myArr: [string, number] = ["test", 12];
console.log('myArr ', myArr);

/*******Access modifire *****/
class User {
    constructor(public fname: string, public lname: string) {
        this.fname = fname;
    }
}
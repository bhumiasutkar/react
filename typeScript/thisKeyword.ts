//"use strict";
/**
 * <script async/defer type="text/javascript">
 * With async, the file gets downloaded asynchronously and then executed as soon as it's downloaded.
 * With defer, the file gets downloaded asynchronously,
 * but executed only when the document parsing is completed. With defer, scripts will execute in the same order as they are called.
 *
 * */

/* this keyword - method invokation*/

let car = {
    name: 'Honda',
    getBrand: function () {
        return this.name;
    }
}

console.log('one ', car.getBrand())
//let mybrand = car.getBrand();
//step 1 - u can access directly
//let mybrand = car.getBrand;

//step 2 -  to resolve use bind
let mybrand = car.getBrand.bind(car);
console.log('myBrand ', mybrand())

let bike = {
    name: 'Yamaha'
}

let myBike = car.getBrand.bind(bike);
console.log(myBike())

/* this keyword - function invocation*/
console.log('****** with regular function ********');
function show() {
    //console.log('one', this); //using use strict will be undefine
    function display() {
        //console.log(this); //using use strict will be undefine
    }
    display();
}
show();

console.log('****** with fat arrow function ********');
let showme = () => {
    //console.log('two', this);
    let displayme = () => {
        //  console.log(this);
    }
    displayme();
}
showme();// with use strict - undefined, without use strict window obj


/**************Constroctor invocation *********************/


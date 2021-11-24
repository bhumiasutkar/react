"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*

supper keyword
- we extend react class from React.Component
- parent constructor need to call before child class, so supper keyword invokes the constructer of parent first
it make sure if u call any methode on parent class 	, parent class is all successfully setup

*/
var Person = /** @class */ (function () {
    function Person(name) {
        console.log('HI ', name);
        console.log('parent this ', this);
    }
    Person.prototype.getID = function () {
        return 10;
    };
    return Person;
}());
var Emp = /** @class */ (function (_super) {
    __extends(Emp, _super);
    function Emp(name) {
        var _this = _super.call(this, name) || this;
        console.log('Hello', name);
        console.log('Child this ', _this);
        return _this;
    }
    Emp.prototype.getID = function () {
        return _super.prototype.getID.call(this);
    };
    return Emp;
}(Person));
var e = new Emp('Bhumi');
console.log('here is output ', e);
console.log('-------------------');
var p = new Person('Bhumi');
console.log('here is output ', e);
/************ Set and Map ************/
//Sets are an unordered collection of unique elements
// let mySet = new Set();
// mySet.add("Bhumi");
// mySet.add("Bhumi");
//console.log('mySet ', mySet);
/***********  array *************/
var myArr = ["test", 12];
console.log('myArr ', myArr);
/*******Access modifire *****/
var User = /** @class */ (function () {
    function User(fname, lname) {
        this.fname = fname;
        this.lname = lname;
        this.fname = fname;
    }
    return User;
}());
//# sourceMappingURL=demo.js.map
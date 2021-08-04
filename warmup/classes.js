"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
//Classes, Methods, Constructors
var Person = /** @class */ (function () {
    /*
    constructor() {
        this.firstName = "Iron";
        this.lastName = "Man";
    }
    */
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
exports.Person = Person;
/*
var aPerson = new Person();
aPerson.firstName = "Adam";
aPerson.lastName = "Kowalski";
console.log(aPerson.firstName);
console.log(aPerson);
console.log(aPerson.getFullName())

var bPerson : Person = new Person();
console.log(bPerson);
*/
var cPerson = new Person("Tom", "Cruise");
console.log(cPerson.getFullName());

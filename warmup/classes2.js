"use strict";
var Person2 = /** @class */ (function () {
    function Person2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person2.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person2.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person2.prototype.getLastName = function () {
        return this.lastName;
    };
    Person2.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    return Person2;
}());
var aPerson = new Person2("Loic", "Suberville");
console.log(aPerson.getFirstName());
aPerson.setFirstName("Meteo");
console.log(aPerson.getFirstName());

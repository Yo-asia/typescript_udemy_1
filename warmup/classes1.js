"use strict";
//Inheritance, Polymorphism
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
var Human = /** @class */ (function () {
    function Human(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    Human.prototype.greet = function () {
        console.log("Hello " + this.firstName + " " + this.lastName + "!");
    };
    return Human;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log("Hello World");
    };
    Programmer.prototype.greetLikeNormalPeople = function () {
        _super.prototype.greet.call(this); //refers to the method od parent class
        //this.greet(); //refers to the method of current class
    };
    return Programmer;
}(Human));
var aProgrammer = new Programmer("Bill", "Gates");
aProgrammer.greetLikeNormalPeople();
var bProgrammer = new Programmer("Steve", "Jobs");
bProgrammer.greet();

//Classes, Methods, Constructors
export class Person {
    firstName : string;
    lastName : string;

    /* 
    constructor() {
        this.firstName = "Iron";
        this.lastName = "Man";
    }
    */

    constructor(firstName : string, lastName : string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() { //method
        return this.firstName + " " + this.lastName;
    }
}
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
var cPerson = new Person ("Tom", "Cruise");
console.log(cPerson.getFullName());
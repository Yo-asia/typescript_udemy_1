//Inheritance, Polymorphism

class Human {
    firstName : string;
    lastName : string;

    constructor (fName : string, lName:string){
        this.firstName = fName;
        this.lastName = lName;
    }

    greet(){
        console.log("Hello " + this.firstName + " " + this.lastName + "!")
    }
}

class Programmer extends Human {
    greet() {
        console.log("Hello World");
    }
    greetLikeNormalPeople() {
        super.greet(); //refers to the method od parent class
        //this.greet(); //refers to the method of current class
    }
}

var aProgrammer = new Programmer("Bill", "Gates");

aProgrammer.greetLikeNormalPeople();

var bProgrammer : Human = new Programmer("Steve", "Jobs");

bProgrammer.greet();
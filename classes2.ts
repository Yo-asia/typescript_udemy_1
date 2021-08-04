class Person2 {
    constructor (private firstName: string, private lastName :  string, readonly age : number){
        //private - available only localy in the class
        //protected - available in this class and classes that expand this class
        //readonly  - can be assigned only when declared or in construtor
    }
    getFirstName() {
        return this.firstName;
    }
    setFirstName(firstName: string) {
        this.firstName=firstName;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(lastName: string) {
        this.lastName=lastName;
    }
}

var aPerson = new Person2("Loic", "Suberville", 32);

console.log(aPerson.getFirstName());
aPerson.setFirstName("Meteo");
console.log(aPerson.getFirstName());
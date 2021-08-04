class Person2 {
    constructor (private firstName : string, private lastName :  string){

    }
    getFirstName() {
        return this.firstName;
    }
    setFirstName(firstName) {
        this.firstName=firstName;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(lastName) {
        this.lastName=lastName;
    }
}

var aPerson = new Person2("Loic", "Suberville");

console.log(aPerson.getFirstName());
aPerson.setFirstName("Meteo");
console.log(aPerson.getFirstName());
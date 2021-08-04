interface PersonInt {
    firstName : string;
    lastName : string;
    getFullName() : string;
}

class Foo implements PersonInt {
    firstName: string;
    lastName: string;
    getFullName(): string {
        return this.firstName + this.lastName;
    }
}

let dPerson : PersonInt = new Foo();
//duck typing - looks like a duck kwacks like a duck then it is a duck
let someObj = {
    firstName: "Test",
    lastName: "test",
    foo: 10,
    getFullName: () => "test"
};

dPerson = someObj;
//dPerson.foo; - foo is not available cause dPerson is type PersonInt 
import {Person} from './classes';


function echo<T> (arg : T) : T {
    return arg;
}

var a = echo(1);

class Admin extends Person {

}

class Manager extends Person {

}
let peron = new Person ('g','g');
let admin = new Admin('a','a');
let manager = new Manager('n','n');

function personEcho<T extends Person>(person:T):T{
    return person;
}
 
var foo = personEcho(peron);
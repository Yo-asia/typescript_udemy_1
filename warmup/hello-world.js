"use strict";
var a;
var b;
var c;
var d;
a = 10;
b = true;
c = 'Banana';
var myArr1;
myArr1 = [];
myArr1 = [1, 2, 3];
myArr1.push(4);
a = myArr1.pop();
//tuple
var myArr;
myArr = [1, true];
var sum = add(11, 2, 6);
console.log(sum);
function add(a, b, c, d) {
    if (b === void 0) { b = 1; }
    if (c === void 0) { c = 0; }
    return a + b + c;
}
var t;
t = true;
t = 5;
t = "test";

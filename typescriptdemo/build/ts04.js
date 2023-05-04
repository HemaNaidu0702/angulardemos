"use strict";
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
function greet() {
    console.log("Hello there..");
}
greet();
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 4));
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(5, 4));
console.log(add(5, 4, 7));
// 2 is the default exponent
function expo(value, exponent = 2) {
    return value ** exponent;
}
console.log(expo(2, 3));
console.log(expo(3));
let x1 = "hello";
console.log(x1.length);

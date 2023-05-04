"use strict";
class Person {
    constructor() {
        this.name = "";
    }
}
const john = new Person();
john.name = "John";
console.log(john);
class Student {
    constructor(name) {
        this.name = name;
    }
}
const student2 = new Student("Jane");
console.log(student2);

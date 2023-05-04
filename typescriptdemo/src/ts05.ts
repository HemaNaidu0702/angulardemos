
class Person {
    name: string = "";
}

const john = new Person();
john.name = "John";
console.log(john);

class Student {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }
}


const student2 = new Student("Jane");
console.log(student2);
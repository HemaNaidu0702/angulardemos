function getTime(): number {
    return new Date().getTime();
}

console.log(getTime());

function greet(): void {
    console.log("Hello there..");
}
greet();

function multiply(a:number, b:number): number {
    return a * b;
}

console.log(multiply(5, 4));

function add(a:number, b:number, c?:number): number {
    return a + b+ (c || 0);
}

console.log(add(5, 4));
console.log(add(5, 4, 7));

// 2 is the default exponent
function expo(value:number, exponent:number=2): number {
    return value ** exponent;
}

console.log(expo(2, 3));
console.log(expo(3));



let x1: unknown = "hello";
console.log((x1 as string).length);
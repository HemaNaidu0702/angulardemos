"use strict";
const names = [];
names.push("obj1");
names.push("obj2");
console.log(names);
const countryNames = ["India", "USA", "UK"];
// cannot push for read only
// countryNames.push("Canada");
const numbers = [1, 2, 3, 4];
numbers.push(78);
// cannot push a string
// numbers.push("x");
let ourtuple;
ourtuple = [5, false, "hello"];
//cant give wrong datatype
// ourtuple = [false, 5, "say"];
const graph = [34.5, 78.2];
console.log(graph);
const [val1, val2] = graph;
console.log(val1);
console.log(val2);

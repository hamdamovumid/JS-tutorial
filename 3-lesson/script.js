// task 1
console.log(5 > 4); // true 〇
console.log("apple" > "pineapple"); // false 〇
console.log(undefined == null); // true 〇
console.log(undefined === null); // false (data type: undefined = undefined, null = object) 〇
console.log(null == "\n0\n"); // false 〇
console.log(null === +"\n0\n"); // false 〇

// task 2
let a = 1, b = 1; 
let c = ++a; // 2 〇

let d = b++; // 1 〇 
console.log(d);

// task 3
let f = 2;
let x = 1 + (f *= 2); // 5 〇 
console.log(x);

// task4
console.log("" + 1 + 0); // 1 ×
console.log("" - 1 + 0); // 1 ×
console.log(true + false); // 1
console.log(6 / "3"); // 2 〇 
console.log("2" * "3"); // 6 〇 
console.log(4 + 5 + "px"); // 9px 〇 
console.log("$" + 4 + 5); // $45 〇 
console.log("4" - 2); // 2 〇 
console.log("4px" - 2); // NaN 〇 
console.log("  -9" + 5); // -95 ×
console.log("  -9" - 5); // -95 × savol
console.log(null + 1); // false × savol
console.log(undefined + 1); // NaN × savol
console.log(" \t \n" - 2); // -2 × savol
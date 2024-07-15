// # Day2 - Operators 

// Activity 1: Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b); // 15
console.log(a - b); //  5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0

// Activity 2: Assignment Operators
let c = 7;
c += 3;
console.log(c); // 10
let d = 3;
d -= 2;
console.log(d); // 1

// Activity 3: Comparison Operators
console.log(3 > 9); // false
console.log(3 < 9); // true
console.log(5 <= 8); // true
console.log(5 >= 8); // false

console.log(5 == "5"); // true
console.log(5 === "5"); // false

// Activity 4: Logical Operators
let cond1 = true;
let cond2 = false;
let result1 = cond1 && cond2;
console.log(result1); // false
let result2 = cond1 || cond2;
console.log(result2); // true

let cond = true;
console.log(!cond); // false

// Activity 4: ternary Operators
let input = -7;
input > 0
  ? console.log(`${input} is positive number`)
  : console.log(`${input} is negative number`);

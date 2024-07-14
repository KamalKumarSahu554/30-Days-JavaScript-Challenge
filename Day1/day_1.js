// # Day1 - Variables and Data Types

// Activity 1: VAriable Declaration
var num = 7;
console.log(num);
let str = "My name is Hero";
console.log(str);

// Activity 2: Constant Declaration
const bool = false;
console.log(bool);

// Activity 3: Data Types
// Primitive
let number = 3;
console.log(typeof number); // Number
let string = "HEllO WORLD";
console.log(typeof string); // String
let boolean = true;
console.log(typeof boolean); // Boolean
let symbol = Symbol("Hey");
console.log(typeof symbol); // Symbol
let bigInt = 123456789123456789n;
console.log(typeof bigInt); // Bigint
let nul = null;
console.log(typeof nul); // Object
let undef;
console.log(typeof undef); // Undifined
// Non-primitive
let myObj = {
  name: "Hero",
  number: 37,
  arr: [1, 2, 3, 4],
  myFunc: () => {
    console.log("this is a function");
  },
};
console.log(typeof myObj); // Object

// Activity 4: Reassigning Variable
let numb = 20;
console.log(numb);
numb = 10;
console.log(numb);

// Activity 5: Understanding const
const msg = "Hey";
console.log(msg);
msg = "Hello";
console.log(msg); // error

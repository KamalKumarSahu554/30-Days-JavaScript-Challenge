// # Day5 - Functions

// Activity 1: Function Declaration
// Task 1:
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
checkEvenOdd(8);

// Task 2:
function calculateSquare(num) {
  return num * num;
}
console.log(calculateSquare(7));
/*=================================================*/

// Activity 2: Function Expression
// Task 3:
const findMax = function (a, b) {
  const max = a > b ? a : b;
  console.log("Max number is ", max);
};
findMax(2, 5);

// Task 4:
const concatenateStr = function (str1, str2) {
  return str1 + str2;
};
let str = concatenateStr("Ram", " Kumar");
console.log(str);
/*=================================================*/

// Activity 3: Arrow Function
// Task 5:
twoSum = (a, b) => a + b;
console.log(twoSum(8, 5));

// Task 6:
const containsCharacter = (str, char) => {
  const result = str.includes(char);
  return result ? true : false;
};
let res = containsCharacter("hello", "l");
console.log(res);
/*=================================================*/

// Activity 4: Function Parameters and Default Value
// Task 7:
product = (a, b = 5) => a * b;
console.log(product(5));

// Task 8:
greeting = (name, age = 30) => `Hello ${name}, Your age is ${age}.`;
let greet = greeting("Ashok");
console.log(greet);
/*=================================================*/

// Activity 5: Higher-Order Function
// Task 9:
const repeatFunction = (fn, times) => {
  for (let i = 0; i < times; i++) {
    fn();
  }
};
const sayHello = () => console.log("Hello!");
repeatFunction(sayHello, 5);

// Task 10:
function applyFunctions(func1, func2, value) {
  let result1 = func1(value);
  let finalResult = func2(result1);
  return finalResult;
}
function double(x) {
  return 2 * x;
}
function addFive(x) {
  return x + 5;
}
var result = applyFunctions(double, addFive, 3);
console.log(result); // Output: 11 (double(3) = 6, addFive(6) = 11)
/*=================================================*/

// # Day5 - Functions

// Activity 1: Function Declaration
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
checkEvenOdd(8);

function calculateSquare(num) {
  return num * num;
}
console.log(calculateSquare(7));

// Activity 2: Function Expression
const findMax = function (a, b) {
  const max = a > b ? a : b;
  console.log("Max number is ", max);
};
findMax(2, 5);

const concatenateStr = function (str1, str2) {
  return str1 + str2;
};

let str = concatenateStr("Ram", " Kumar");
console.log(str);

// Activity 3: Arrow Function
twoSum = (a, b) => a + b;
console.log(twoSum(8, 5));

const containsCharacter = (str, char) => {
  const result = str.includes(char);
  return result ? true : false;
};
let res = containsCharacter("hello", "l");
console.log(res);

// Activity 4: Function Parameters and Default Value
product = (a, b = 5) => a * b;
console.log(product(5));

greeting = (name, age = 30) => `Hello ${name}, Your age is ${age}.`;
let greet = greeting("Ashok");
console.log(greet);

// Activity 5: Higher-Order Function
const repeatFunction = (fn, times) => {
  for (let i = 0; i < times; i++) {
    fn();
  }
};
const sayHello = () => console.log("Hello!");
repeatFunction(sayHello, 5);

function applyFunctions(func1, func2, value) {
  var result1 = func1(value);
  var finalResult = func2(result1);
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

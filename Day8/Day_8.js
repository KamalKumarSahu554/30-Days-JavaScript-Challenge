// Activity 1:
function person(name, age) {
  console.log(`His name is ${name} and he ${age} years old.`);
}
// person("Ram", 20);

greet = (name1, name2) => `Hello ${name1},
My name is ${name2}`;
// console.log(greet("Ram", "Sam"));

// Activity 2:
const numArr = [1, 2, 3, 4];
const [first, second] = numArr;
// console.log(first, second);

const book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  year: 1997,
};
const { title, author } = book;
// console.log(`Book title ${title} and author ${author}`);

// Activity 3:
let arr = [1, 2, 3, 4];
let newArr = [...arr, 5, 6, 7];
// console.log(newArr);

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
// console.log(sum(1, 2, 4));

// Activity 4:
product = (num1, num2 = 1) => num1 * num2;
// console.log(product(7));

// Activity 5:
let name = "Ram";
let age = 22;
const personDetails = {
  name,
  age,
  greet() {
    return `My name is ${this.name} and I'm ${this.age} years old`;
  },
};
console.log(personDetails);

const propName = "John";
const propAge = "20";
const propCity = "New York";
const obj = {
  [`name-${propName}`]: propName,
  [`age-${propAge}`]: propAge,
  [`city-${propCity}`]: propCity,
};
console.log(obj);

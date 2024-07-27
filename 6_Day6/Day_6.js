// # Day6 - Arrays

//Activity 1: Array Creation and Access
// Task 1:
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

// Task 2:
console.log(arr1[0], arr1[arr1.length - 1]);
/*=================================================*/

//Activity 2: Array Methods (Basic)
// Task 3:
arr1.push(6);
console.log(arr1);

// Task 4:
arr1.pop();
console.log(arr1);

// Task 5:
arr1.shift();
console.log(arr1);

// Task 6:
arr1.unshift(0);
console.log(arr1);
/*=================================================*/

// Activity 3: Array Methods (Intermediate)
// Task 7:
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr1 = arr2.map(function (num) {
  return num * 2;
});
console.log(newArr1);

// Task 8:
let newArr2 = arr2.filter(function (num) {
  return num % 2 === 0;
});
console.log(newArr2);

// Task 9:
let newArr3 = arr2.reduce(function (acc, num) {
  return acc + num;
});
console.log(newArr3);
/*=================================================*/

//Activity 4: Array Iteration
// Task 10:
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

// Task 11:
arr3.forEach(function (num) {
  console.log(num);
});
/*=================================================*/

//Activity 5: Multi_dimentional Arrays
// Task 12:
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);

// Task 13:
console.log(matrix[2][1]);
/*=================================================*/

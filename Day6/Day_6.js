//Activity 1:
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

console.log(arr1[0], arr1[4]);

//Activity 2:
arr1.push(6);
console.log(arr1);

arr1.pop();
console.log(arr1);

arr1.shift();
console.log(arr1);

arr1.unshift(0);
console.log(arr1);

// Activity 3:
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr1 = arr2.map(function (num) {
  return num * 2;
});
console.log(newArr1);

let newArr2 = arr2.filter(function (num) {
  return num % 2 === 0;
});
console.log(newArr2);

let newArr3 = arr2.reduce(function (acc, num) {
  return acc + num;
});
console.log(newArr3);

//Activity 4:
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

arr3.forEach(function (num) {
  console.log(num);
});

//Activity 5:
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);

console.log(matrix[2][1]);

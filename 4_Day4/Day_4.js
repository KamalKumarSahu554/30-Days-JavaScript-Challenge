// # Day4 - Loops

// Activity 1: For Loop
// Task 1:
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2:
let mul = 1;
for (let i = 1; i <= 10; i++) {
  mul = 5 * i;
  console.log(mul);
}
/*=================================================*/

// Activity 2: While Loop
// Task 3:
let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
  console.log(sum);
}

// Task 4:
let n = 10;
while (n > 0) {
  console.log(n);
  n--;
}
/*=================================================*/

// Activity 3: Do While loop
// Task 5:
let a = 1;
do {
  console.log(a);
  a++;
} while (a <= 5);

// Task 6:
let num = 1;
let fact = 1;
let j = num;
do {
  fact *= j;
  j--;
} while (j > 0);
console.log(fact);
/*=================================================*/

// Activity 4: Nested Loop
// Task 7:
let rows = 5;
for (let y = 0; y < rows; y++) {
  let pattern = " ";
  for (let z = 0; z <= y; z++) {
    pattern += "* ";
  }
  console.log(pattern);
}
/*=================================================*/

// Activity 5: Loop Control Statement
// Task 8:
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

// Task 9:
for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 7) break;
}
/*=================================================*/

// # Day3 - Control Structures

// Activity 1: If-Else Statements
// Task 1:
let num = 5;
if (num > 0) {
  console.log(`${num} is positive number`);
} else if (num < 0) {
  console.log(`${num} is negative number`);
} else {
  console.log(`It is zero`);
}

// Task 2:
let age = 170;
if (age >= 18 && age < 120) {
  console.log("Eligible for vote");
} else if (age <= 0 || age > 120) {
  console.log("Not aplicable");
} else {
  console.log(`Not eligible for vote`);
}
/*=================================================*/

// Activity 2: Nasted If-Else Statements
// Task 3:
function findLargest(a, b, c) {
  let largest;
  if (a >= b) {
    if (a >= c) {
      largest = a;
    } else {
      largest = c;
    }
  } else {
    if (b >= c) {
      largest = b;
    } else {
      largest = c;
    }
  }
  console.log(`Largest number is ${largest}`);
}
findLargest(2, 4, 6);
/*=================================================*/

// Activity 3: Switch Case
// Task 4:
let day = 9;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Not-Apllicabpe");
    break;
}

// Task 5:
function assignGrade(score) {
  let grade;
  switch (true) {
    case score <= 100 && score >= 90:
      grade = "O";
      break;
    case score <= 90 && score >= 80:
      grade = "A";
      break;
    case score <= 80 && score >= 70:
      grade = "B";
      break;
    case score <= 70 && score >= 60:
      grade = "C";
      break;
    case score <= 60 && score >= 50:
      grade = "D";
      break;
    case score <= 50 && score >= 0:
      grade = "F";
      break;
  }
  console.log(`Grade ${grade} for score ${score}`);
}
assignGrade(189);
/*=================================================*/

// Activity 4: Conditional (Ternary) Oerator
// Task 6:
let n = 7;
let res = n % 2 === 0 ? `${n} is even number` : `${n} is odd number`;
console.log(res);
/*=================================================*/

// Activity 5: Combining Oerator
// Task 7:
isleapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is leap year`;
  } else return `${year} is not a leap year`;
};
console.log(isleapYear(2028));
/*=================================================*/

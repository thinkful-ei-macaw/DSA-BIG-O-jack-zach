'use strict';

/* Counting Sheep */

function countSheep(num) {
  for (let i = 1; i <= num; i++) {
    console.log('Another sheep jumps over the fence');
  }
  console.log('All sheep jumped over the fence');
}

countSheep(3);

/* Power Calculator */

function pow(num, p) {
  let result = num;
  while (p > 1) {
    result *= num;
    p--;
  }
  return result;
}

console.log(pow(8, 3));

/* Reverse String */

function reverseString(string) {
  let theReversedString = '';
  while (string.length) {
    theReversedString += string.slice(-1);
    string = string.slice(0, string.length - 1);
  }
  return theReversedString;
}

console.log(reverseString('hello'));

/* nth Triangular Number */

function nthTriangular(num) {
  let result = 0;

  while (num) {
    result += num;
    num--;
  }
  return result;
}

console.log(nthTriangular(5));

/* String Splitter */

function stringSplitter(string, splitter) {
  const stringArray = [...string];
  const result = [];
  let builder = '';

  stringArray.forEach((char) => {
    if (char !== splitter) builder += char;
    if (char === splitter) {
      result.push(builder);
      builder = '';
    }
  });

  result.push(builder);

  return result;
}

console.log(stringSplitter('02/20/2020', '/'));

/* Fibonacci */

function fib(num) {
  const nums = [];
  let counter = 0;

  while (counter < num) {
    if (counter === 0 || counter === 1) {
      nums.push(1);
    } else {
      nums.push(nums[counter - 1] + nums[counter - 2]);
    }
    counter++;
  }
  console.log(nums);
}

fib(8);

/* Factorial */

function factorial(num) {
  let result = num;
  while (num > 1) {
    result *= num - 1;
    num--;
  }
  return result;
}

console.log(factorial(5));

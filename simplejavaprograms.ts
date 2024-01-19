1.A simple program that prints Hello, World!

// the hello world program
console.log('Hello World');

2.Program to swap two variables.

//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

3.Program that checks if the number is positive, negative or zero

// input from the user
const number = parseInt("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}

// check if number is 0
else if (number == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
     console.log("The number is negative");
}

4.Program to find the largest among three numbers?

// take input from the user
const num1 = parseFloat("Enter first number: ");
const num2 = parseFloat("Enter second number: ");
const num3 = parseFloat("Enter third number: ");
let largest;

// check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// display the result
console.log("The largest number is " + largest);

5.Program to generate fibonacci series up to n terms

// take input from the user
const num = parseInt('Enter the number of terms: ');
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= num; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

6.Program to reverse a string

function reverseString(str) {

  // empty string
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}

// take input from the user
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);

7.Program to count the number of vowels in a string

function countVowel(str) { 

  // find the count of vowels
  const count = str.match(/[aeiou]/gi).length;

  // return number of vowels
  return count;
}

// take input
const str = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);

8.Program to display the date and time

// get date and time
const date = new Date(2023, 2, 12, 9, 25, 30);

// get the date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();

// display date
console.log('Date: ' + n);

// display time
console.log('Time: ' + time);

9.Program to insert an item at a specific index into an array

function insertElement() {
  let array = [1, 2, 3, 4, 5];

  // index to add to
  let index = 3;

  // element that you want to add
  let element = 8;

  array.splice(index, 0, element);
  console.log(array);
}

insertElement();

10.Program to get pyramid pattern

let n = 6;
let string = "";

for (let i = 1; i <= n; i++) {
  // printing star
  for (let j = 0; j < i; j++) {
    if(i === n) {
      string += "*";
    }
    else {
      if (j == 0 || j == i - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);
const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
  const splitString = str.split()
  return splitString
};

const reverse = str => {
  // TODO - write a function which reverses the string
  const splitString2 = str.split("")
  const reverseArray = splitString2.reverse()
  const joinArray = reverseArray.join("")
  // return str.split("").reverse().join("")
  return joinArray
};

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  return arr 
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  // if (num==0 || num == 1)
  
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
};

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
console.log(tokenize("hello kitty"))
console.log(reverse("hello kitty"))
console.log(uniqueOnes(["strawberry","chocolate","banana","vanilla"]))
console.log(factorial(5))
// asssert (reverse("3df") === "fd3")

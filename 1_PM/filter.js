// Complete the implementation below such that all elements of the array
// that are not multiples of 7 are removed

const arr = [7, 8, 15, 14, 13, 70, 44, 35, 88, 77, false, "7", "hi", null];

const multOf7 = el => {
  // TODO
  const multiples7 = el % 7===0 && typeof(el)==="number"
  return multiples7


};

// Array.prototype.filter = function(fun) {
//   // TODO
// };

const newArr = arr.filter(multOf7);

console.log(newArr);

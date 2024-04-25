// // // Modern JS test
// // (async (a = 1, ...b) => ({...b, a, [a]: `${a}`}))();

// // // New Promise APIs
// // require('util').promisify;
// // require('fs').promises;


// const square = (a) => a * a;

// // Example usage:
// console.log(square(5));

// const arr = [1, 2, 3];

// // const modArr = arr.map((element) => element * 2);

// // console.log(modArr);
// arr.splice(0,1,5);
// console.log(arr)
 
const lodash = require("lodash");

const sum = lodash.sum([1, 2, 4, 5, 6, 7, 8, 9, 10]);

console.log("Sum is", sum);

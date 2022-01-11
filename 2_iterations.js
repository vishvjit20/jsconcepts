// Map is itself a fn
// Map takes as input a callback fn
// The callback fn takes 3 parameter (v, i, oarr)
// map will call the callback multiple times (once for each value)
// for each run of callback, map will pass v, i and original array to callback
// callback will process the value and index and return a single value
// Single value returned by each run of callback will be collected in a new array by map
// Map returns that new array
// length of returned array is equal to original array

// let arr = [2, 5, 9, 8, 15, 11, 6];
// let sqarr = arr.map((v) => v * v);

// console.log(sqarr);

// Q - Convert in short forms
// let arr = [
//   "Sumeet Malik",
//   "Amit Malik",
//   "Inderjeet Malik",
//   "Daya Malik",
//   "Kunal Malik",
//   "Aryan Malik",
// ];

// let narr = arr.map(function (val) {
//   let nval = val.split(" ");
//   let res = "";
//   for (let vals of nval) {
//     res += vals[0] + ".";
//   }
//   return res;
// });

// console.log(narr);

// Q -

// let arr = [
//   { gender: "M", age: 24 },
//   { gender: "F", age: 34 },
//   { gender: "F", age: 28 },
//   { gender: "M", age: 74 },
//   { gender: "F", age: 31 },
//   { gender: "M", age: 47 },
//   { gender: "F", age: 26 },
//   { gender: "M", age: 47 },
//   { gender: "F", age: 47 },
//   { gender: "F", age: 19 },
//   { gender: "M", age: 20 },
// ];

// let narr = arr.map(
//   (obj) => obj.gender === "F" && obj.age >= 20 && obj.age <= 30
// );

// console.log(narr);

// Use the map function to produce the below output
// return an array with true and false for females between 20 and 30
// let us say xyz corp wants to hire females between age >= 20 and <= 30

// Create custom map
// Array.prototype.myMap = function (callback) {
//   let res = [];
//   for (let i = 0; i < this.length; i++) {
//     let val = this[i];
//     let returnVal = callback(val, i, this);
//     res.push(returnVal);
//   }
//   return res;
// };

// let arr = [1, 4, 3, 7, 11, 5];

// let narr = arr.myMap((val) => val * val);
// console.log(narr);

// Filter
// let arr = [3, 4, 5, 6, 7, 7, 0, 8, 5, 9, 12, 6, 8];

// let res = arr.filter((val) => val % 2 !== 0);
// console.log(res);

// Custom filter
// Array.prototype.myFilter = function (callback) {
//   let res = [];
//   for (let i = 0; i < this.length; i++) {
//     let val = this[i];
//     let rbv = callback(val, i, this);

//     if (rbv === true) {
//       res.push(val);
//     }
//   }
// };

// let arr = [3, 4, 5, 6, 7, 7, 0, 8, 5, 9, 12, 6, 8];

// let res = arr.filter((val) => val % 2 !== 0);
// console.log(res);

// Filter map combine map - return ages of all F's
// let arr = [
//   { gender: "M", age: 24 },
//   { gender: "F", age: 34 },
//   { gender: "F", age: 28 },
//   { gender: "M", age: 74 },
//   { gender: "F", age: 31 },
//   { gender: "M", age: 47 },
//   { gender: "F", age: 26 },
//   { gender: "M", age: 47 },
//   { gender: "F", age: 47 },
//   { gender: "F", age: 19 },
//   { gender: "F", age: 20 },
// ];

// let res = arr.filter((obj) => obj.gender === "F").map((obj) => obj.age);
// console.log(res);

// let arr = [11, 16, 18, 17, 23, 42, 11, 37];

// let mres = arr.map((v) => v % 2 === 1);
// let fres = arr.filter((v) => v % 2 === 1);

// console.log(mres);
// console.log(fres);

// let products = [
//   { name: "T-Shirt", price: 25 },
//   { name: "Headphones", price: 125 },
//   { name: "Keyboard", price: 75 },
//   { name: "Monitor", price: 200 },
// ];

// let res = products.map((product) => {
//   return product.price >= 100
//     ? product.name.toUpperCase()
//     : product.name.toLowerCase();
// });

// console.log(res);

// let arr = [5, 83, 24, 67, 71, 12, 24, 7];
// let ans = arr.filter((val) => val * val <= 1000).map((val) => val * val * val);

// let ans = arr.map((val) => val * val * val).filter((val) => val <= 1000);
// console.log(ans);

// Some | equiv to OR
// let arr = [
//   { gender: "M", age: 24 },
//   { gender: "F", age: 34 },
//   { gender: "F", age: 28 },
//   { gender: "M", age: 74 },
//   { gender: "F", age: 31 },
//   { gender: "M", age: 47 },
//   { gender: "F", age: 26 },
//   { gender: "M", age: 47 },
//   { gender: "F", age: 47 },
//   { gender: "F", age: 19 },
//   { gender: "F", age: 20 },
// ];

// let anyValid = arr.some(function (v, i, oarr) {
//   return v.gender === "M" && v.age <= 18;
// });

// console.log(anyValid);

// Array.prototype.myEvery = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     let val = this[i];
//     let rbv = callback(val, i, this);

//     if (!rbv) return false;
//   }
//   return true;
// };

// let allValid = arr
//   .filter((v) => v.gender === "F")
//   .myEvery((v) => v.age >= 20 && v.age <= 18);

// console.log(allValid);

// let arr = [10, 20, 30, 40, 50];

// let sum = arr.reduce((pv, cv, ci, oarr) => pv + cv);
// console.log(sum);

// count all primes using reduce
// let arr = [51, 23, 37, 44, 73, 82, 97, 45];

// function isPrime(val) {
//   for (let i = 2; i * i <= val; i++) {
//     if (val % i === 0) return false;
//   }
//   return true;
// }

// let count = arr.reduce((prev, curr) => (isPrime(curr) ? prev + 1 : prev), 0);
// console.log(count);

// let arr2d = [
//   [1, 2, 3],
//   [4, 5],
//   [1, 6, 7, 8],
//   [5, 9],
//   [7, 9, 10],
// ];

// let res = arr2d.reduce((prev, curr) => prev.concat(curr), []);
// console.log(res);

// Union of array -- reduce

// Compound function
// function f(x) {
//   return x * x;
// }

// function g(x) {
//   return x + 10;
// }

// function h(x) {
//   return 2 * x;
// }

// f(g(h(x))) => f(g(2 * x)) => f (2*x + 10) => f (4 * x ^ 2 + 40 * x + 100)

// let farr = [f, g, h];
// let x = 10;

// let cv = farr.reverse().reduce((prev, curr) => curr(prev), x);
// console.log(cv);

// Callbacks
// geolocation = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       a: 0,
//       b: 1,
//     };
//     callback(data);
//   }, 2000);
// };

// geolocation("Pheledelphia", (data) => {
//   console.log(data);
// });

// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })

// add = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b);
//   }, 2000);
// };

// add(8, 3, (data) => {
//   console.log(data);
// });

// Closure
// function addCounter() {
//   let counter = 0;
//   return function () {
//     counter++;
//     return counter;
//   };
// }

// let count = addCounter();
// console.log(count());
// console.log(count());
// console.log(count());

let arr = [
  10,
  20,
  30,
  [90, 110, [120, 30], 40],
  30,
  [60, 50, [11]],
  [1, [2, [3]]],
  150,
];

Array.prototype.myFlat = function (td) {
  let res = [];

  customFlat(this, td - 1, res);
  return res;
};

function customFlat(node, td, res) {
  if (Array.isArray(node)) {
    if (td > 0) {
      for (let i = 0; i < node.length; i++) {
        customFlat(node[i], td - 1, res);
      }
    } else {
      for (let i = 0; i < node.length; i++) {
        res.push(node[i]);
      }
    }
  } else {
    res.push(node);
  }
}

console.log(myFlat(3));

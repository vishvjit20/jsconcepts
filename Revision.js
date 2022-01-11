// let x;
// console.log(x);
// // Undefined is a datatype in javascript
// console.log(typeof x);

// let x = null;
// console.log(x);

// console.log(undefined == null);
// console.log(undefined === null);

// REST AND SPREAD OPERATORS
// function sum(a, ...b) {
//   console.log(a, b);
// }

// sum(2, 3);
// sum(2, 3, 4);
// sum(2, 3, 4, 5);

// function f() {
//   console.log(arguments);
// }

// f(3, 4, 5, 6);

// spread
// let arr1 = [2, 3, 5, 6];
// let arr2 = [...arr1, 5, 7, 2];
// console.log(arr2);
// console.log(Math.max(...arr2));

// Infinity & -Infinity
// console.log(1 / 0);
// 64 bit format
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(9e4);
// console.log(-9e400);
// console.log(Number.MAX_VALUE * 3);
// console.log(isFinite(5 * 4));
// console.log(NaN === NaN); // false because there is always a unique value for each NaN

// Arrow function
// this does not work with arrow function
// arguments does not work with arrow function
// can't use new to call arrow function

// Closures
// When a function comes under another function a closure is created
// Closure pattern remembers outer variable & also helps to access outer member scope

// Map
// let products = new Map();
// products
//   .set("name", "vishwajeet")
//   .set("code", 1234567)
//   .set("dept", "TI")
//   .set("company", "tcs");

// console.log(products);
// console.log(products.size);
// console.log(products.keys());
// console.log(products.values());
// console.log(products.entries());

// for (let [k, v] of products.entries()) {
//   console.log(`Key : ${k} & Value : ${v}`);
// }

// console.log(products.has("code"));
// console.log(products.has("brand"));

// let obj = Object.fromEntries(products.entries());
// console.log(obj);

// let employeeObj = {
//   name: "vishwajeet",
//   age: 23,
//   currCompany: "tcs",
//   prevCompany: "amazon",
// };

// console.log(employeeObj);
// Convert object literal into array
// console.log(Object.entries(employeeObj));
// Convert object literal into Map
// const empMap = new Map(Object.entries(employeeObj));
// console.log(empMap);

// String
// let str = new String("1234567");
// console.log(str.substring(1, 3));
// console.log(str.substr(1, 3));
// let str = "my krish name is xyz";
// console.log(str.charAt(3));
// console.log(str.charAt());
// console.log(str.length);
// console.log(str.indexOf("is"));
// console.log(str.lastIndexOf("is"));
// console.log("\u00a9");
// console.log("\u{1f436}");

// Object literals

// // dynamic keys
// let value = "name";

// let obj = {
//   [value]: "vishwajeet",
//   age: 23,
//   currCompany: "tcs",
//   prevCompany: "amazon",

//   sayHi() {
//     console.log("Hii there");
//   },
// };

// const proto = Object.defineProperty({}, "name", {
//   writable: false,
//   configurable: true,
//   value: "vikas",
// });

// const newObj = Object.create(proto);
// newObj.name = "aman";
// console.log(newObj.name);
// let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

// let newPerson = Object.assign({}, person);
// newPerson.firstName = "Alex";
// console.log(person);
// console.log(newPerson);

// arguments

// function f() {
//   console.log(arguments);
//   let arr = Array.from(arguments);
//   console.log(arr);
// }

// f("Hey", "How are you ?", "May god bless", 9972, 37.59, true);

// this

// let obj = {
//   test: () => {
//     console.log(this);
//   },
// };

// let obj = {
//   test: function () {
//     console.log(this);
//   },
// };

// obj.test();

// Call, Apply and Bind
// let obj = {
//   life: 100,
//   battery: 80,
// };

// let obj2 = {
//   life: 60,
//   battery: 30,

//   summary: function () {
//     console.log("Players in queue are : ", Array.from(arguments));
//     console.log(`Life is : ${this.life} & battery : ${this.battery}`);
//   },
// };

// obj2.summary.call(obj, 10, 20, 30);
// obj2.summary.apply(obj, [10, 20, 30]);
// let resultFn = obj2.summary.bind(obj, 10, 20, 30);
// resultFn(40, 50);

// Class and Object
// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   details() {
//     console.log(`My name is ${this.name}, my age is ${this.age}`);
//   }
// }

// const obj = new Student("Aman", 22);
// const obj2 = new Student("Akash", 23);

// obj.details();
// obj2.details();

// Reduce 2d array in 1d
// let arr = [[1, 2, 3], [4, 5], [6], [7, 8, 9]];
// let res = arr.reduce((prev, curr, i, oarr) => prev.concat(curr));
// console.log(res);

// let arr = [false, 0, NaN, 7, 5, undefined, "Hii", "", true];
// let res = arr.filter((val) => !!val);
// console.log(res);

// Calculate factorial
// let num = parseInt(process.argv[2]);
// function factorial(num) {
//   if (num <= 1) return 1;
//   return num * factorial(num - 1);
// }

// let fact = factorial(num);
// console.log(fact);

// Check for prime
// function isPrime(num) {
//   if (num <= 2) return true;
//   for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
//   return true;
// }
// console.log(isPrime(5));
// console.log(isPrime(57));

// Array Intersection
// let arr = [
//   [2, 3, 5, 7, 8, 4, 9],
//   [5, 8, 3, 1, 11, 13],
//   [2, 5, 8, 9],
// ];

// let intersection = arr.reduce((prev, curr) =>
//   prev.filter((val) => curr.includes(val))
// );

// console.log(intersection);

// Array union
// let arr = [
//   [2, 3, 5, 7, 8, 4, 9],
//   [5, 8, 3, 1, 11, 13],
//   [2, 5, 8, 9],
// ];

// let union = arr.reduce(
//   (prev, curr) => prev.concat(curr.filter((val) => !prev.includes(val))),
//   []
// );
// console.log(union);

// Fibinacci series
// let res = [1, 1];
// let n = parseInt(process.argv[2]);
// for (let i = 2; i < n; i++) {
//   let curr = res[i - 1] + res[i - 2];
//   res.push(curr);
// }

// console.log(res);

// Reverse a number
// let num = parseInt(process.argv[2]);
// let res = 0;
// let rem = 0;
// while (num > 0) {
//   rem = num % 10;
//   res = res * 10 + rem;
//   num = parseInt(num / 10);
// }
// console.log(res);

// Asynchronus JS
// Callbacks are now a days replaced with promises and async await
// Callbacks are used when there is an asynchronous process

// function fetchData(callback) {
//   setTimeout(function () {
//     data = { code: 75389, name: "unknown" };
//     callback(data);
//   }, 2000);
// }

// fetchData(function (data) {
//   console.log(data);
// });

// Callback hell
// function cSqr(n, cb) {
//   setTimeout(() => {
//     cb(n * n);
//   }, 2000);
// }

// cSqr(5, function (res) {
//   console.log(res);
//   cSqr(res, function (res1) {
//     console.log(res1);
//     cSqr(res1, function (res2) {
//       console.log(res2);
//       cSqr(res2, function (res3) {
//         console.log(res3);
//       });
//     });
//   });
// });

// Promise
// Promise will have by default pending state
// let promise = new Promise(function (resolve, reject) {
//   // resolve("Success...");
//   reject("Error");
// });

// promise
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Finishing process"));

// const cSqr = (n) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(n * n);
//     }, 2000);
//   });
// };

// cSqr(4)
//   .then((res) => {
//     console.log(res);
//     return cSqr(res);
//   })
//   .then((res) => {
//     console.log(res);
//     return cSqr(res);
//   })
//   .then((res) => {
//     console.log(res);
//     return cSqr(res);
//   })
//   .then((res) => {
//     console.log(res);
//     return cSqr(res);
//   })
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Data processing finished..."));

// Promise - all, allSettled, race
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1");
//   }, 2000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Promise 2");
//     reject("Promise 2");
//   }, 2000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 3");
//   }, 2000);
// });

// const p4 = "Hello";

// Promise.all([p2, p1, p3]).then((prMsgs) => {
//   console.log(prMsgs);
// });

// Promise.allSettled([p1, p2, p3, p4])
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err));

// race with [] empty iterable will return pending state...
// Promise.race([p1, p2, p3]).then((res) => console.log(res));

// Fetch
// const fetchData = async () => {
//   let data;
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   if (response.ok) {
//     data = await response.json();
//     console.log(data);
//   }
// };

// fetchData();

// Iterator concepts
// Symbol.iterator

// let arr = [5, 3, 7, 1, 9];
// let itr = arr[Symbol.iterator]();
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());

// let obj = {
//   start: 10,
//   end: 15,
//   [Symbol.iterator]() {
//     return {
//       next() {
//         if (obj.start <= obj.end) return { value: obj.start++, done: false };
//         else return { done: true };
//       },
//     };
//   },
// };

// for (let i of obj) console.log(i);

// Generators
// Generators can help us to pause and resume the code
// function* is the keyword used to define generators
// yield is the operator which pauses the generator
// yield also helps to receive input and send output
// When a generator function is called, it does not call thefunction instead it returns a generator object
// next() method will start the execution till the yield operator
// next returns 2 keys 1st value, 2nd boolean shows next status
// Generators are iterables

// const genFunction = function* () {
//   console.log("hello");
//   yield "Yield value";
//   console.log("hello world");
//   yield;
//   console.log("galaxy");
// };

// const genObj = genFunction();
// for (let obj of genObj) {
//   console.log(obj);
// }

// let gObj = [...genFunction()];
// console.log(gObj);

// let obj = {
//   start: 10,
//   end: 15,
//   *[Symbol.iterator]() {
//     for (let cnt = this.start; cnt <= this.end; cnt++) {
//       yield cnt;
//     }
//   },
// };

// for (let val of obj) console.log(val);
// console.log([...obj]);

// When it comes to recursive function or calling one gen function from another, the yield* syntax is used
// yield should be used inside generator function

// function* gen() {
//   console.log("Hii");
// }

// function* gen1() {
//   // const g = gen();
//   // g.next();
//   yield* gen(); 
// }

// const g1 = gen1();
// g1.next();

// function* gen() {
//   yield "One";
//   yield "Two";
// }

// return() in place of next will terminate the iteration and done will become true
// Writing yield inside finally will not allow the return() to terminate
// let obj = gen();
// console.log(obj.next());
// console.log(obj.return());
// console.log(obj.next());

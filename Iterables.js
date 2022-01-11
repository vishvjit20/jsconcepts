// Iterators

// let arr = [2, 5, 1, 4, 3];
// let itr = arr[Symbol.iterator]();

// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());

// let obj = {
//   start: 5,
//   end: 9,

//   [Symbol.iterator]: function () {
//     let val = obj.start;
//     return {
//       next() {
//         if (val <= obj.end) return { value: val++, done: false };
//         else return { done: true };
//       },
//     };
//   },
// };

// let obj = {
//   start: 5,
//   end: 9,

//   [Symbol.iterator]: function () {
//     return this;
//   },

//   next() {
//     if (obj.start <= obj.end) return { value: obj.start++, done: false };
//     else return { done: true };
//   },
// };

// for (let val of obj) {
//   console.log(val);
// }

// Generators
// const generatorFn = function* () {
//   console.log("hello");
//   yield "this is returned";
//   console.log("hii");
//   yield;
//   console.log("how r u");
//   yield;
//   console.log("i am fine");
//   yield;
// };

// const genObj = generatorFn();

// console.log(genObj.next());
// console.log(genObj.next());
// console.log(genObj.next());
// console.log(genObj.next());
// console.log(genObj.next());

// for (let val of genObj) {
//   console.log(val);
// }

// let obj = {
//   start: 5,
//   end: 9,
//   *[Symbol.iterator]() {
//     for (let val = this.start; val <= this.end; val++) yield val;
//   },
// };

// for (let val of obj) console.log(val);

// let gen = function* () {
//   console.log("Hello I am there");
// };

// let gen2 = function* () {
//   //   let g1 = gen();
//   //   g1.next();
//   yield* gen();
//   console.log("Hii");
// };

// let g2 = gen2();
// g2.next();

// let generator = function* () {
//   yield "One";
//   yield "two";
//   yield "three";
// };

// let genObj = generator();
// console.log(genObj.next());
// console.log(genObj.return("Terminating condition...."));
// console.log(genObj.next());
// console.log(genObj.next());

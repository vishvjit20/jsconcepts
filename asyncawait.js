// Async generators and iterators

// let obj = {
//   a: 10,
//   b: 20,
//   [Symbol.asyncIterator]() {
//     return {
//       async next() {
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         if (obj.a <= obj.b) return { value: obj.a++, done: false };
//         else return { done: true };
//       },
//     };
//   },
// };

// let obj = {
//   a: 10,
//   b: 20,
//   async *[Symbol.asyncIterator]() {
//     for (let cnt = this.a; cnt <= this.b; cnt++) {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       yield cnt;
//     }
//   },
// };

// (async () => {
//   for await (let val of obj) {
//     console.log(val);
//   }
// })();

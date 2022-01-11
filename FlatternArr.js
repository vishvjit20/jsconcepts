// Flat array
// let arr = [1, 2, 3, 4, [5, 6, 7], [6, 9]];

// console.log(arr.flat());
// console.log([].concat(...arr));
// let narr = arr.reduce((prev, curr) => prev.concat(curr), []);
// console.log(narr);

// Deep flat

// let arr = [[1, 2, 3], [[4, 5, [6, 7]]], [[[8, 9, 10], 11], 12]];
// function deepFlat(arr, d = 1) {
//   return d > 0
//     ? arr.reduce(
//         (prev, curr) =>
//           prev.concat(Array.isArray(curr) ? deepFlat(curr, d - 1) : curr),
//         []
//       )
//     : arr.slice();
// }

// let narr = deepFlat(arr, Infinity);
// console.log(narr);

// Deep non recursive flatterning using stack

// let arr = [[1, 2, 3], [[4, 5, [6, 7]]], [[[8, 9, 10], 11], 12]];

// function flatten(input) {
//   const stack = [...input];
//   const res = [];
//   while (stack.length > 0) {
//     const next = stack.pop();
//     if (Array.isArray(next)) stack.push(...next);
//     else res.push(next);
//   }
//   return res.reverse();
// }

// let res = flatten(arr);
// console.log(res);

// flat method removes empty slots in array
// let arr = [2, 3, , 4, 5, 5, 6, 8, 11, , 5];
// console.log(arr.flat());

// deep flat using generator function

// let arr = [[1, 2, 3], [[4, 5, [6, 7]]], [[[8, 9, 10], 11], 12]];
// function* flatten(arr, depth) {
//   if (depth === undefined) depth = 1;
//   for (const item of arr) {
//     if (Array.isArray(item) && depth > 0) yield* flatten(item, depth - 1);
//     else yield item;
//   }
// }

// let res = [...flatten(arr, Infinity)];
// console.log(res);

// flatMap
// let arr = [1, 2, 3, 4];
// let narr = arr.flatMap((val) => [val, val * 2]);
// console.log(narr);
// let strArr = ["its raining", "here", "in", " ", "india"];
// let res = strArr.flatMap((val) => val.split(" "));
// console.log(res);

// const nums = [1, 2, 3];
// const strs = ["one", "two", "three"];
// const mapped = nums.flatMap((val, i) => [val, strs[i]]);
// console.log(mapped);

// Reduce Right
// const strs = ["t", "s", "e", "b"];
// let best = strs.reduceRight((c, v) => c.concat(v));
// console.log(best);

// const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// nums.copyWithin(2, 3, 4);
// console.log(nums);

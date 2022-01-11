// let arr = [20, 30, 40, 50];

// display(arr);

// function display(arr) {
//   console.log(arr + " -> " + arr.length);
// }

// push adds the value at the end of the array
// arr.push(70, 30);

// returns new length of array
// let returnValue = arr.push(100);
// console.log(returnValue);

// unshift - add value at front
// shift - removes value from front
// pop - delete value from last
// arr.unshift(5);
// arr.shift();
// arr.pop();

// if array is empty pop will return undefined, otherwise it will return last value popped
// arr = [10, 20];
// let val = arr.pop();
// console.log(val);

// tricks in array
// arr[10] = 80; // no array bound out of index
// arr["kuchbhi"] = 1000;
// console.log(arr["kuchbhi"]); // because arrays are objects in js

// console.log(Object.keys(arr));
// console.log(arr);

// display(arr);

// Q - rearrange array such that odd elements at the end and even at front
// let arrangements = [5, 7, 2, 1, 8, 9, 4, 11];
// console.log(arrangements);

// for of gives values, for in gives indexes

// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// let i = 0,
//   j = 0;
// Dutch national flag algorithm
// while (i < arrangements.length) {
//   if (arrangements[i] % 2 === 0) {
//     i++;
//     continue;
//   }
//   swap(arrangements, i, j);
//   i++, j++;
// }

// console.log(arrangements + " ");

// Slice, Splice
// Slice is like substring

// arr = [10, 20, 20, 30, 40, 50, 60, 80];
// console.log(arr);
// starting index, end idx - 1
// let arr2 = arr.slice(5, 8);
// console.log(arr2);

// entire array can be used for cloning
// let clone_arr = arr.slice();
// console.log(clone_arr);

// negative index -8, -7, -6, -5, -4, -3, -2, -1
// console.log(arr.slice(3, -2));
// [ 30, 40, 50 ]

// shallow copy
// let o1 = { age: 10 };
// let o2 = { age: 30 };
// let o3 = { age: 30 };

// let narr = [o1, o2, o3];
// displayObjArr(narr);

// let scopy = narr.slice();
// scopy[0].age = 110;

// incorrect way of creating copy -> original array object will change
// displayObjArr(scopy);
// displayObjArr(narr);

// function displayObjArr(arr) {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str += arr[i].age + ", ";
//   }

//   console.log(str);
// }

// Iterative approach

// function subarraysCreate(vals) {
//   for (let i = 0; i < vals.length; i++) {
//     for (let j = i + 1; j <= vals.length; j++) {
//       console.log(vals.slice(i, j));
//     }
//   }
// }

// subarraysCreate(vals);

// remove 2 elements from  position 2 and add 4 numbers, add those 2 numbers in new array
// let na = arr.splice(2, 2, 5, 6, 7, 9);
// console.log(na);
// console.log(arr);

// remove prime numbers
// let nums = [2, 5, 9, 11, 15, 17, 19, 21, 25, 28, 33, 37];

// function prime(num) {
//   for (let i = 2; i * i <= num; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// for (let i = nums.length - 1; i >= 0; i--) {
//   if (prime(nums[i]) === true) nums.splice(i, 1);
// }

// console.log(nums);

// let a1 = [10, 20, 50, 70, 90];
// let a2 = [63, 34, 50, 90, 80, 10];

// let inter = a1.filter((v) => a2.includes(v));
// console.log(inter);

// Intersection
// let arr2d = [
//   [10, 50, 70, 90, 30, 60],
//   [20, 50, 110, 70, 30, 60],
//   [10, 50, 70, 80, 60],
//   [20, 50, 70, 80, 60],
//   [110, 120, 61, 50, 10, 60],
// ];

// let res = arr2d.reduce((prev, curr) =>
//   prev.filter((val) => curr.includes(val))
// );

// console.log(res);

// Union
let arr2d = [
  [10, 50, 70, 90, 30, 60],
  [20, 50, 110, 70, 30, 60],
  [10, 50, 70, 80, 60],
  [20, 50, 70, 80, 60],
  [110, 120, 61, 50, 10, 60],
];

let union = arr2d.reduce((pv, cv) =>
  pv.concat(cv.filter((v) => !pv.includes(v)))
);
console.log(union);

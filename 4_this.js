// call, apply, bind
// function displayName() {
//   console.log("Simran");
// }

// displayName();
// displayName.call();
// displayName.apply();

// let participant1 = {
//   name: "Lily",
//   battery: 70,
//   chargeBattery: function (a, b) {
//     this.battery = this.battery + a + b;
//   },
// };

// let participant2 = {
//   name: "John",
//   battery: 30,
// };

// participant1.chargeBattery.call(participant2, 20, 30);
// participant1.chargeBattery.apply(participant2, [20, 30]);
// Bind method returns the function and it is not immidiately invoked
// let res = participant1.chargeBattery.bind(participant2, 20, 30);

// console.log(participant2);
// res();
// console.log(participant2);

// function fun() {
//   console.log(arguments);
// }

// function fun2() {}

// let boundFun = fun.bind(fun2, "Hello", "hii", "I", "am", "here");
// boundFun("Neha", "Esha");

// Custom bind
Function.prototype.myBind = function () {
  let orgFun = this;
  let argsArr = Array.from(arguments);
  let newThis = argsArr[0];
  let newParams = argsArr.slice(1);

  let myFun = function () {
    let moreParams = Array.from(arguments);
    let totalParams = newParams.concat(moreParams);
    orgFun.apply(newThis, totalParams);
  };
};

// let arr2d = [[2, 7, 5, 3, 1], [4, 1], [8, 2, 1, 11], [5]];
// let res = arr2d.reduce(function (pv, cv, ci, arr) {
//   let narr = pv.concat(cv);
//   return narr;
// }, []);
// console.log(res);

// let arr1 = [10, 20, 30, 40, 50];
// let arr2 = [30, 40, 50, 60, 80];

// let arr2minusarr1 = arr2.filter((v) => arr1.includes(v) === false);
// let union = arr1.concat(arr2minusarr1);
// console.log(union);

// let arr2d = [
//   [2, 7, 5, 3, 1],
//   [4, 1],
//   [8, 2, 1, 11],
//   [5, 13],
// ];

// let union1 = arr2d.reduce(function (prev, curr) {
//   let cv = curr.filter((v) => prev.includes(v) === false);
//   let union = prev.concat(cv);
//   return union;
// });

// console.log(union1);

// let arr = [
//   5, 3, 7, 1, 9, 8, 1, 77, 11, 13, 21, 83, 55, 47, 88, 19, 21, 25, 17, 13, 8, 8,
//   5, 9, 20,
// ];

// let narr = arr.sort((a, b) => a - b);
// console.log(narr);

let obj = {
  fun1: function (friend1, friend2) {
    console.log(
      "This person is called " + this.fullName + " His/her age is " + this.age
    );
    console.log(this.fullName + " says hello to " + friend1 + ".");
    console.log(this.fullName + " says hello to " + friend2 + ".");
  },

  fullName: "Vishwajeet",
  age: 23,
};

let obj2 = { fullName: "Neha", age: 32 };

// obj.fun1("Aman", "Akash");
obj.fun1.call(obj2, "Vikas", "Pradeep");

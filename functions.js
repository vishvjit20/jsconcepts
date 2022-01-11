"use strict";

// DEFAULT PARAMS
// const records = [];
// const student = function (name, age = 18, school = "DPS") {
//   const data = {
//     name,
//     age,
//     school,
//   };
//   records.push(data);
//   console.log(records);
// };

// student("Aman", 17, "GWPS");
// student("Vishwajeet");

// Value v/s reference
const flight = "LH123";

// const jonas = {
//   name: "Jonas Schmedth",
//   passport: 2479873210,
// };

// const checkIn = function (flightN, passenger) {
//   flightN = "LH999";
//   passenger.name = "MR " + passenger.name;

//   if (passenger.passport === 2479873210) console.log("Checkin");
//   else console.log("Wrong passport!");
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

/**
 * JS treats functions as first class citizens
 * Functions are simply values
 * Fns are just another type of object
 */

/**
 * Higher order functions - a function which receives another function as argument
 * that returns a new function or both
 *
 * This is only possible b/c of 1st class function
 */

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toUpperCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// const transformer = function (str, fn) {
//   console.log(fn(str));
// };

// transformer("hey there I like JS", upperFirstWord);
// transformer("hey there I like JS", oneWord);

// Closure
/**
 * A function has access to the variable environment (ve) of the execution context in which it was created
 * Closure : - VE attached to the function, exactly as it was at the time and place the function was created.
 * A closure is a closed over variable environment of the execution cntext in which a function was creates
 * even after the execution context is gone
 * A closure gives a fn access to all the vars of its parent fn, even after that parent fn has returned.
 * The function keeps a reference to its outer scope which preserves the scope chain throughout
 * A closure mkes sure that a fn never loose connection to the variables that existed at the fn's birth place.
 */

// const counter = function () {
//   let count = 0;
//   return function () {
//     ++count;
//     console.log(count);
//   };
// };

// const counts = counter();
// counts();
// counts();
// counts();

// let f;
// let g = function () {
//   const a = 23;
//   f = function () {
//     console.log(2 * a);
//   };
// };

// g();
// f();

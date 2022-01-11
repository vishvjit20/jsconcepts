// const Person = function (name, age, height) {
//   this.name = name;
//   this.age = age;
//   this.height = height;

//   this.sayHi = function () {
//     console.log(`${this.name} says hi!`);
//   };
// };

// class Person {
//   constructor(name, age, height) {
//     this.name = name;
//     this.age = age;
//     this.height = height;
//   }
// }

// Person.prototype.sayHi = function () {
//   console.log(`${this.name} says hii!`);
// };

// let jack = new Person("Jack", 23, 145);
// let james = new Person("James", 27, 165);

// console.log(jack);
// console.log(james);
// jack.sayHi();
// james.sayHi();
// console.log(Person.prototype === jack.__proto__);
// console.log(jack.__proto__);
// console.log(jack.__proto__.__proto__);

// const PersonProto = {
//   sayHi() {
//     console.log(`Hi from ${this.name}`);
//   },
// };

// const obj = Object.create(PersonProto);
// obj.name = "Vishwajeet";
// console.log(obj);

// Map
// let product = new Map();
// product
//   .set("pCode", 1111)
//   .set("pName", "Shampoo")
//   .set("price", 2000)
//   .set("discount", 500);

// console.log(product);
// console.log(product.entries());
// console.log(product.keys());
// console.log(product.values());
// for (let [k, v] of product.entries()) console.log(`${k}, ${v}`);
// console.log(product.size);
// console.log(product.has("pCode"));
// console.log(product.has("xyz"));
// const obj = Object.fromEntries(product.entries());
// console.log(obj);

// Convert object to map
// let product = {
//   pCode: 1571,
//   pName: "Soap",
//   price: 800,
//   discount: 200,
// };

// let prodMap = new Map(Object.entries(product));
// console.log(prodMap);

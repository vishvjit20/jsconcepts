// 4 fundamental principles of object oriented programming
// Abstraction - Hiding details which does not matter
// Encapsulation - Keeping methods and properties private inside the class so that they are not accessible outside the class
// Inheritance - Making all the properties and methods of certain class available to child class forming a hiererchical relationship between classes
// Polymorphism - A child class can overwrite a method it inherited from a parent class

// Objects are linked to a prototype object
// Prototypical inheritance - The prototype contains method that
// are accessible to all the objects liked to that prototype
// Behaviour is deligated to the linked prototype object

// 3 ways of implementing prototypical inheritance in js
// Constructor function - technique to create objects from a function
// ES6 classes - ES6 classes do not behave like classes in classical OOP
// Object.create()

// const Person = function (fname, age) {
//   this.fname = fname;
//   this.age = age;

// Never use this, we use prptotype inheritance to avoid this
//   this.sayHi = function () {
//     console.log("Hii");
//   };
// };

// let jonas = new Person("Jonas", 32);
// let jack = new Person("Jack", 36);
// console.log(jonas, jack);
// console.log(jonas instanceof Person);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

// Person.prototype.sayHi = function () {
//   console.log(`Hii there ${this.fname}!`);
// };

// Person.prototype.species = "Homo Sapiens";
// console.log(jonas.species, jack.species);

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(jack));
// console.log(jonas.__proto__.__proto__);

// jonas.sayHi();
// jack.sayHi();

// ES6 CLASSES

// const PersonCl = class {};

// class PersonCl {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHi() {
//     console.log(`Hi I am ${this.name}, my age is ${this.age}`);
//   }
// }

// const peter = new PersonCl("Peter", 27);
// const mary = new PersonCl("Mary", 25);

// peter.sayHi();
// mary.sayHi();

// console.log(peter.__proto__ === PersonCl.prototype);

// Classes are not hoisted
// Classes are first class citizens
// Classes are executed in strict mode

// Object.create()

// const PersonProto = {
//   sayHi() {
//     console.log(`Hi from ${this.name}`);
//   },
// };

// const raj = Object.create(PersonProto);
// raj.name = "Raj";
// raj.age = 21;
// raj.sayHi();
// console.log(raj);
// console.log(raj.__proto__.__proto__);

// Inheritance between classes
// const Person = function (name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (name, birthYear, course) {
//   Person.call(this, name, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.name}, I studies ${this.course}`);
// };

// const vj = new Student("viswajeet", 1998, "CSE");
// console.log(vj);
// vj.introduce();
// vj.calcAge();
// console.log(vj.__proto__);
// console.dir(Student.prototype.constructor);

// Exercise
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const EV = function (make, speed, battery) {
//   Car.call(this, make, speed);
//   this.battery = battery;
// };

// // Liking prototype
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = Car;

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.battery = chargeTo;
//   console.log(`Battery charge to ${this.battery}`);
// };

// EV.prototype.accelerate = function () {
//   this.speed = this.speed + 20;
//   this.battery = this.battery - 1;
//   console.log(
//     `${this.make} going at ${this.speed} at charge of ${this.battery}`
//   );
// };

// const vehicle = new EV("Tesla", 57, 43);
// console.log(vehicle);
// vehicle.accelerate();
// vehicle.accelerate();
// vehicle.chargeBattery(80);

// class PersonCl {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHi() {
//     console.log(`Hi I am ${this.name}, my age is ${this.age}`);
//   }
// }

// class Student extends PersonCl {
//   constructor(name, age, course) {
//     super(name, age);
//     this.course = course;
//   }
// }

// const alex = new Student("Alex", 19, "CSE");
// console.log(alex);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (name, birthYear, course) {
//   PersonProto.init.call(this, name, birthYear);
//   this.course = course;
// };
// const jay = Object.create(StudentProto);
// jay.init("Jay", 2010, "CSE");

// console.log(jay);

/**
 * Public fields
 * Private fields
 * Public methods
 * Private methods
 */

class Account {
  // Public field
  locale = "en_US";

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected Property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = "en-US";
  }

  getMovements() {
    return this.#movements;
  }

  deposite(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposite(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposite(val);
      console.log("Loan approved");
    }
  }

  // Private methods
}

const acc1 = new Account("Jonas", "EUR", 1111);
// acc1.#movements.push(2020);
acc1.deposite(250);
acc1.withdraw(140);
acc1.requestLoan(3000);
console.log(acc1.getMovements());

console.log(acc1);

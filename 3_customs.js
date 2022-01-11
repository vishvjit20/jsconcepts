// Create custom map

Array.prototype.myMap = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    let val = this[i];
    let returVal = callback(val, i, this);
    res.push(returVal);
  }
  return res;
};

// Create custom filter

Array.prototype.myFilter = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    let val = this[i];
    let rbv = callback(val, i, this);

    if (rbv === true) {
      res.push(val);
    }
  }
  return res;
};

// let nums = [1, 3, 2, 5, 7, 8, 4, 9];

// let res = nums.myFilter(function (val) {
//   return val >= 5;
// });

// console.log(res);

// Custom Some
Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    let val = this[i];
    let rbv = callback(val, i, this);

    if (rbv) return true;
  }
  return false;
};

// Custom every
Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    let val = this[i];
    let rbv = callback(val, i, this);

    if (!rbv) return false;
  }
  return true;
};

// Custom Find
Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    let val = this[i];
    let rv = callback(val, i, this);
    if (rv === true) {
      return val;
    }
  }
  return undefined;
};

// Custom FindIndex
Array.prototype.myFindIndex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    let val = this[i];
    let rv = callback(val, i, this);

    if (rv === true) {
      return i;
    }
  }
  return -1;
};

// Custom Reduce
Array.prototype.myReduce = function (callback, init) {
  let pv;

  if (init === undefined) {
    pv = this[0];
    for (let i = 1; i < this.length; i++) {
      let cv = this[i];
      pv = callback(pv, cv, i, this);
    }
  } else {
    pv = init;
    for (let i = 0; i < this.length; i++) {
      let cv = this[i];
      pv = callback(pv, cv, i, this);
    }
  }

  return pv;
};

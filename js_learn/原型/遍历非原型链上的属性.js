Object.prototype.map = function (fn) {
  let obj = this;
  const result = [];
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      const item = fn(key, obj[key]);
      result[key] = item;
    }
  }
  return result;
};

const test1 = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};

let r2 = test1.map((key, value) => {
  return ++value;
});
console.log(r2);

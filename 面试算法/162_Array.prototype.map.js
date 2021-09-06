//方法一
Object.prototype.map = function (fn) {
  const obj = this;
  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const item = fn(key, obj[key]);
      result[key] = item;
    }
  }
  return result;
};

//方法二
Object.prototype.map2 = function (fn) {
  const obj = this;
  const result = {};
  for (const key of Object.keys(obj)) {
    const item = fn(key, obj[key]);
    result[key] = item;
  }
  return result;
};

//方法三
Object.prototype.map3 = function (fn) {
  const obj = this;
  const result = {};
  for (const [key, values] of Object.entries(obj)) {
    const item = fn(key, obj[key]);
    result[key] = item;
  }
  return result;
};

const test1 = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};

let r1 = test1.map2((key, value) => {
  return Math.pow(value, 2);
});

console.log(r1);

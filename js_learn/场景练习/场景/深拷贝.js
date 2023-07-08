/* 深拷贝 */
var obj1 = {
  a: ["a", "b", "c"],
  b: 2,
  c: 3,
};
var objString = JSON.stringify(obj1);
var obj2 = JSON.parse(objString);
var obj3 = { ...obj1 }
obj2.a = 5;
obj3.a = 3
console.log(obj1.a); // 1
console.log(obj2.a); // 5
console.log(obj3.a)



var array = [
  { number: 1 },
  { number: 2 },
  { number: 3 },
  [4], [[5, 6]]
];
function copy (obj) {
  var newObj = obj.constructor === Array ? [] : {};
  for (var i in obj) {
    newObj[i] = typeof obj[i] === 'object' ? copy(obj[i]) : obj[i];
  }
  return newObj
}
var copyArray = copy(array)
copyArray[0].number = 100;
copyArray[3][0] = 1
console.log(array); //  [{number: 1}, { number: 2 }, { number: 3 }]
console.log(copyArray); // [{number: 100}, { number: 2 }, { number: 3 }]

//深拷贝数组，对象都行
function deepClone (obj, newObj) {
  var newObj = newObj || {};
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      newObj[key] = (obj[key].constructor === Array) ? [] : {}
      deepClone(obj[key], newObj[key]);
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj;
}

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

// /* 数组深拷贝 */
// var arr1 = [1, 2, 3];
// var arr2 = arr1.concat();
// arr1[0] = 4;
// console.log(arr1); //4, 2, 3
// console.log(arr2); //1, 2, 3

// var arr1 = [1, 2, 3];
// var arr2 = arr1.slice(0);
// arr1[0] = 4;
// console.log(arr1); //4, 2, 3
// console.log(arr2); //1, 2, 3

// var arr1 = [1, 2, 3];
// var [...arr2] = arr1;
// arr1[0] = 4;
// console.log(arr1); //4, 2, 3
// console.log(arr2); //1, 2, 3

var arr1 = [1, [2, 3], [4], [[5, 6]], [[7]]]
function deepCopy (arr) {
  var out = [], len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i] instanceof Array) {
      out.push(deepCopy(arr[i]));
    }
    else out.push(arr[i])
  }
  return out;
}
console.log(deepCopy(arr1))
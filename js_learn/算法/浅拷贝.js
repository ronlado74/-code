/* 浅拷贝 */
var obj1 = {
  a:  1,
  b:  2,
  c:  3
}
var obj2 = obj1;
obj2.a = 5;
console.log(obj1.a);  // 5
console.log(obj2.a);  // 5
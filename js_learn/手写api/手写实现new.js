const myNew = function (func, ...args) {
  //创建一个空对象，并__proto__指向构造函数的prototype
  let obj = Object.create(func.prototype)
  //将this指向新创建的对象obj,同时new构造函数时要执行函数，
  func.call(obj, ...args)
  //返回新创建的对象
  return obj
}

//测试
function Test (name, age) {
  this.name = name;
  this.age = age;
  this.stack = []
}

const S = function () {
  this.stack = []
}

let s = new S()
console.log(s)

console.log(myNew(Test, '小汪', 18))
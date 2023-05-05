function myInstanceof (left, right) {
  // 获取对象的原型
  let proto = Object.getPrototypeOf(left)
  // 获取构造函数的 prototype 对象
  let prototype = right.prototype;

  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    // 如果没有找到，就继续从其原型上找，Object.getPrototypeOf方法用来获取指定对象的原型
    proto = Object.getPrototypeOf(proto);
  }
}
console.log(myInstanceof([], Array))


var myFunc = {
  foo: 'bar',
  func: function () {
    var self = this
    console.log(this.foo)
    console.log(self.foo)
      (function () {
        console.log(this.foo)
        console.log(self.foo)
      }())
  }
}
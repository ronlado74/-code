const flatten = arr => {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

let arr = [1, [2, 3, [4]], [5]]

console.log(flatten(arr))

var msg = 'hello'
for (let i = 0; i < 10; i++) {
  var msg = 'hello' + i * 2 + i
}
alert(msg)

var a = {}, b = Object.prototype
[a.prototype === b, Object.getPrototypeOf(a) === b]

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
myFunc.func()
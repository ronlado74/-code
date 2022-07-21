/* function DY () {
  getName = function () { alert(1) }
  return this
}
DY.getName = function () { alert(2) }
DY.prototype.getName = function () { alert(3) }
var getName = function () { alert(4) }
function getName () { alert(5) }

getName() */

有问题
/* let a = { x: 0 }

function fn (obj) {
  obj.x = 1
  console.log(a.x)
  obj = { y: 2 }
}

fn(a)
console.log(a.x) */


/* var x = 1
var output = (function () {
  delete x;
  return x;
})()
console.log(output) */


/* var a = { b: 1 }
function test (a) {
  a.b = 2
  return a
}
console.log(test(a))
console.log(a) */

/* var a = 1
function test (a) {
  a = 3
  return a
}
console.log(test(a))
console.log(a) */

/* function func (arg = 10) {
  console.log(this.p)
  console.log(arg)
}

func.p = 20
const wrapper = func.bind({
  p: 30
})
wrapper() */



/* const obj = {
  Jhon () { }
};
(function func (arg = function () { }) {
  console.log(obj.Jhon.name)
  console.log(arg.name)
})(); */

/* try {
  let flag = true
} catch { }

var state = false
function func () {
  if (typeof flag === 'undefined') {
    console.log(1)
  }
  if (typeof state === 'undefined') {
    var state = 20
    console.log(2)
  }
}
func() */

/* let arr = ['a', 'b', 'c', 'd', 'e', 'd', 'c']
console.info(arr.lastIndexOf('c'), arr.lastIndexOf('d'))
arr.length = 4
console.log(arr)
console.info(arr.lastIndexOf('c'), arr.lastIndexOf('d')) */


/* function test () {
  // var f = []
  // let f = ''
  // let f = 0
  let f = {}
  if (f) {
    console.log(1)
  }
}
test(); */

/* (function () {
  var a = b = 5
})();
console.log(a) */
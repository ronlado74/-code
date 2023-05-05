


let arr = [1, 2, [3], { a: 1 }]
function deep (arr) {
  let out = []
  for (let item in arr) {
    if (arr[item] instanceof Array || typeof arr[item] === 'object') {
      out.push(deep(arr[i]))
    } else {
      out.push(arr[i])
    }
  }
  return out
}
console.log(deep(arr))


let p = new MaxPri

setTimeout(() => {
  console.log(0)
}, 0)

new Promise((resolve, reject) => {
  console.log(1)
  resolve()
}).then(() => {
  console.log(2)
  new Promise((resolve, reject) => {
    console.log(3)
    resolve()
  }).then(() => {
    console.log(4)
  }).then(() => {
    console.log(5)
  })
}).then(() => {
  console.log(6)
})

new Promise((resolve, reject) => {
  console.log(7)
  resolve()
}).then(() => {
  console.log(8)
}).then(() => {
  console.log(9)
})

const obj = {
  func () {
    setTimeout(function () {
      console.log(this)
    }, 0)
  }
}
obj.func.call(obj)


let arr1 = [[90, 80, 80], [90, 100, 85], [90, 90, 85]]


let a = [1, 2, 3]
a.forEach(item => item + 1)


let obj2 = (function () {
  var innner = '1-2'
  return {
    innner: '1-1',
    say: function () {
      console.log(innner)
    }
  }
})()
obj2.say()
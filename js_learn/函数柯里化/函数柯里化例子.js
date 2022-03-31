function sum (a, b, c) {
  return a + b + c
}
console.log(sum(1, 2, 3))

const jSum = (a, b, c) => {
  return a + b + c
}
console.log(jSum(1, 2, 3))


//使用柯里化
function kSum (a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}
console.log(kSum(1)(2)(3))

//箭头函数柯里化
const jkSum = (a) => (b) => (c) => {
  return a + b + c
}
console.log(jkSum(1)(2)(3))
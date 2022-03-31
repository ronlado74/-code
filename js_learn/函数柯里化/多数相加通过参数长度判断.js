function sum (a) {
  let res = a
  return function add (b) {
    if (arguments.length) {
      res += b
      return add
    }
    return res
  }
}
console.log(sum(1)(2)())

//ES6简洁版
const sum2 = a => b => {
  return b ? sum2(a + b) : a
}
console.log(sum2(1)(2)())


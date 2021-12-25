function sum(a) {
  let res = a
  function add(b) {
    res += b
    return add
  }
  add.res = function () {
    return res
  }
  return add
}

console.log(sum(1)(2))
function recution (num) {
  if (num === 1 || num === 2) {
    return 1
  } else {
    return recution(num - 2) + recution(num - 1)
  }
}
console.log(recution(6))

let arr = []
for (let i = 1; i <= 5; i++) {
  arr.push(recution(i))
}
console.log(arr)
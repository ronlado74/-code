let arr = [1, 1, 2, 2, 3, 4, 3, 4, 5]
function one (arr) {
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    res = res ^ arr[i]
  }
  return res
}
console.log(one(arr))


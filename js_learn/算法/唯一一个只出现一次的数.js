let arr = [1, 1, 2, 2, 3, 4, 3, 4, 5]
function one (arr) {
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    res = res ^ arr[i]
  }
  return res
}
console.log(one(arr))

let arr1 = [1, [2, [3]], 4]
function flat (arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}
console.log(flat(arr1))

function deep (arr) {
  let out = []
  let len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i] instanceof Array) {
      out.push(deep(arr[i]))
    } else {
      out.push(arr[i])
    }
  }
  return out
}
console.log(deep(arr1))
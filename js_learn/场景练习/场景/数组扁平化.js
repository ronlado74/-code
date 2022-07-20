const flatten = arr => {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

let arr = [1, [2, 3, [4]], [5]]

console.log(flatten(arr))
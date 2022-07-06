const arr = [1, 2, 3, [4, [5]]]
const flat = arr => {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}


console.log(flat(arr))
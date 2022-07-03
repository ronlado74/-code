let arr = [1, 2, 3]
const reverse = arr => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i]
    arr[i] = arr[arr.length - i - 1]
    arr[arr.length - i - 1] = temp
  }
  return arr
}

console.log(reverse(arr))
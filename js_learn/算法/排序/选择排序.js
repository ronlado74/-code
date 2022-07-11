let arr = [2, 2, 3, 8, 9, 9, 1, 7, 5]

//时间复杂度O(n2),空间复杂度O(1)，不稳定
for (let i = 0; i < arr.length; i++) {
  let index = i
  for (let j = i; j < arr.length; j++) {
    if (arr[j] < arr[index]) {
      index = j
    }
  }
  let temp = arr[index]
  arr[index] = arr[i]
  arr[i] = temp
}

console.log(arr)
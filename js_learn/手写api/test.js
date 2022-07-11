const arr = [2, 2, 1, 7, 5]


for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length - i - 1; j++) {
    if (arr[j + 1] < arr[j]) {
      let temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = temp
    }
  }
}

console.log(arr)
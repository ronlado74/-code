let arr = [2, 2, 3, 8, 9, 9, 1, 7, 5]

//时间复杂度O(n2) 空间复杂度O(1)，最好O(n)，最差O(n2)，稳定
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j + 1] < arr[j]) {
      let temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = temp
    }
  }
}
console.log(arr)
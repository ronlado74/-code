const arr1 = [1, 1]
const arr2 = [2, 2]
const arr3 = [4, 4]
function test (arr1, arr2, arr3) {
  let k = (arr1[1] - arr2[1]) / (arr1[0] - arr2[0])
  let b = arr1[1] - k * arr1[0]

  if (arr3[0] * k + b === arr3[1]) {
    return true
  } else {
    return false
  }
}

console.log(test(arr1, arr2, arr3))
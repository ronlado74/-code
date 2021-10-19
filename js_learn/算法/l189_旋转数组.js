var rotate = function(nums, k) {
  let arr1 = []
  let arr2 = []
  for(let i = k + 1; i < nums.length; i++){
    arr1.push(nums[i])
  }
  for(let i = 0; i < k + 1; i++){
    arr2.push(nums[i])
  }
  return arr2.concat(arr1)
};

var rotate = function(nums, k) {
  k = k % nums.length
  return nums.unshift(...nums.splice(nums.length-k))
};

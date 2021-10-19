let nums = [1,2,3,4]
var exchange = function(nums) {
  let arr1 = nums.filter(item => (item % 2 == 0))
  let arr2 = nums.filter(item => (item % 2 != 0))
  return arr2.concat(arr1)
};
console.log(exchange(nums))
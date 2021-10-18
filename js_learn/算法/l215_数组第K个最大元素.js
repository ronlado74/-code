nums = [3,2,1,5,6,4];
k = 2;
var findKthLargest = function (nums, k) {
  let nums1 = nums.sort((a, b) => (b - a));
  return nums1[k - 1];
};

console.log(findKthLargest(nums,k))

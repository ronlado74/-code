//超出时间限制
var maxSubArray = function (nums) {
  let max = -Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    if(nums[i] <= 0 && nums[i + 1] >= nums[i]){
      continue
    }
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > max) {
        max = sum;
      }
      //如果sum比0小，一定影响后面的结果舍弃
      if(sum < 0){
        break
      }
    }
  }
  return max
};

//动态规划
var maxSubArray = function (nums) {
  max = nums[0];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > 0) {
      nums[i + 1] = nums[i + 1] + nums[i];
    }
    max = Math.max(nums[i + 1], max);
  }
  return max;
};
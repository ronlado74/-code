nums = [-1,0,1,2,-1,-4]
var threeSum = function(nums) {
  let stack = []
  nums.sort((a,b) => {return a-b})
  for(let i = 0; i < nums.length; i++){
    let left = i + 1;
    let right = nums.length - 1
    //如果nums[i] 和 nums[i-1]相同则跳过  
    if(i > 0 && nums[i] == nums[i - 1]){
      continue
    }
    while(left < right){
      let sum = nums[left] + nums[i] + nums[right]
      if(sum > 0){
        right--
      }else if(sum < 0){
        left++
      }else {
        stack.push([nums[left],nums[i],nums[right]])
        left++
        right--
         // 跳过重复数字
         while(nums[left] === nums[left - 1]){
           left++
         }
         while(nums[right] === nums[right + 1]){
           right--
         }
      }
    }
  }
  return stack
};


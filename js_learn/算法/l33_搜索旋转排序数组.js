nums = [4,5,6,7,0,1,2]
target = 0
var search = function(nums, target) {
  let res = -1
  for(let i = 0;i < nums.length; i++){
    if(nums[i] == target){
      res = i
    }
  }
  return res
};

console.log(search(nums, target))
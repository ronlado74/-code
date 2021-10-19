var majorityElement = function(nums) {
  let o = {}
  for(let i = 0; i < nums.length; i++){
    let num = nums[i]
    if(o[num]){
      o[num]++
    }else{
      o[num] = 1
    }
  }
  let max = 0
  for(let key in o){
    if(o[key] >= max){
      max = o[key]
    }
  }
  let word = ''
  for(let key in o){
    if(o[key] == max){
      word = key
    }
  }
  return parseInt(word)
};
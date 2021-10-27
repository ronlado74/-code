let n = 2
let arr = []
var climbStairs = function(n) {
  if(n == 1){
    return 1
  }
  if(n ==2){
    return 2
  }
  if(arr[n]){
    return arr[n]
  }else{
    arr[n] = climbStairs(n - 1) + climbStairs(n - 2)
  }
  return arr[n]
};
console.log(climbStairs(40))


var climbStairs1 = function(n) {
  if(n == 1){
    return 1
  }
  if(n ==2){
    return 2
  }
  return climbStairs1(n - 1) + climbStairs1(n - 2)
    
};
console.log(climbStairs1(4))

var climbStairs2 = function(n) {
  if(n == 0){
    return 1
  }
  if(n == 1){
    return 1
  }
  if(n == 2){
    return 1
  }
  if(n == 3){
    return 1
  }
  return climbStairs2(n - 1) + climbStairs2(n - 3)
    
};
console.log(climbStairs2(6))
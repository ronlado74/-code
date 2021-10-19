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
};
console.log(climbStairs(40))
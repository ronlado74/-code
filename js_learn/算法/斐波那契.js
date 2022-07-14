//递归
function fib (num) {
  if (num === 0) {
    return 0
  }
  if (num === 1 || num === 2) {
    return 1
  } else {
    return fib(num - 2) + fib(num - 1)
  }
}
console.log(fib(6))

let arr = []
for (let i = 1; i <= 5; i++) {
  arr.push(fib(i))
}
console.log(arr)

//动态规划
function dynamicProgramming (n) {
  let dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
console.log(dynamicProgramming(6))
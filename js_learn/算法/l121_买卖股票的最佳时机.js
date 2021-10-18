prices = [2, 4, 1];
//暴力，超出时间限制
/* var maxProfit = function(prices) {
  let max = 0
  for(let i = 0; i < prices.length; i++){
    for(let j = i + 1; j < prices.length; j++){
      if(prices[j] < prices[j + 1]){
        continue;
      }
       let p = prices[j] - prices[i]
       if(p >= max){
         max = p;
       }
    }
  }
  return max
}; */

/* 遍历一次，记录最小的一次价格minprice,
如果prices[i]小于最小价格则更新minprice
如果prices[i]大于最小价格则计算prices[i]-minprice*/
var maxProfit = function (prices) {
  let minprice = Number.MAX_VALUE;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprice) {
      minprice = prices[i];
    } else {
      let p = prices[i] - minprice;
      if (p > max) {
        max = p;
      }
    }
  }
  return max;
};

console.log(maxProfit(prices));

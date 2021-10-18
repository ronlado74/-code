intervals = [[1,4],[0,1]]

var merge = function(intervals) {
    let i = 0
    //将数组按左端点排序
    for(let j = 0; j < intervals.length - 1; j++){
      for(let k = 0; k < intervals.length - 1 - j; k++){
        if(intervals[k + 1][0] < intervals[k][0]){
          let temp = intervals[k]
          intervals[k] = intervals[k + 1]
          intervals[k + 1] = temp
        }
      }
    }

    while(i < intervals.length - 1){
      if(intervals[i][1] >= intervals[i + 1][0]){
        let cur = Math.max(intervals[i][1],intervals[i + 1][1])
        intervals[i] = [intervals[i][0], cur]
        intervals.splice(i + 1, 1)
        }else{
        i++
      }
    }
    return intervals
};

console.log(merge(intervals))
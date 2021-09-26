var zigzagLevelOrder = function (root) {
  let res = [];
  if (root === null) {
    return res;
  }
  let queue = [root]
  while(queue.length){
    let currentLevel = []
    let nums = queue.length
    for(let i = 0; i < nums; i++){
      let curr = queue.shift()
      currentLevel.push(curr.val)
      if(curr.left){
        queue.push(curr.left)
      }
      if(curr.right){
        queue.push(curr.right)
      }
    }
    res.push(currentLevel)
  }

  for(let i = 0; i < res.length; i++){
    if(i % 2 !== 0){
      res[i].reverse()
    }
  }
  return res
};


var zigzagLevelOrder = function (root) {
  let res = [];
  if (root === null) {
    return res;
  }
  let queue = [root]
  let left = true   //一个变量 表明是否从左往右，每一次循环变一次
  while(queue.length){
    let currentLevel = []
    let nums = queue.length
    for(let i = 0; i < nums; i++){
      let curr = queue.shift()
      if(left == true){
        currentLevel.push(curr.val)
      }else{
        currentLevel.unshift(curr.val)
      }
      if(curr.left){
        queue.push(curr.left)
      }
      if(curr.right){
        queue.push(curr.right)
      }
    }
    left = !left
    res.push(currentLevel)
  }
  return res
};
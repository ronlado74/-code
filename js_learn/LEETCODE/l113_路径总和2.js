var pathSum = function(root, targetSum) {
  let arr = []
  let res = []
  if(!root) return res
  //先给每个节点找到爹
  const recution = function(node, father){
    node.father = father
    //找到叶子节点
    if(node.left == null && node.right == null){
      arr.push(node)
    }
    if(node.left) recution(node.left, node)
    if(node.right) recution(node.right, node)
  }
  recution(root, null)
  
  for(let i = 0; i < arr.length; i++){
    let cur = 0 
    let c_arr = []
    let p = arr[i]
    //查找相加等于目标值的路径
    while(p !== null){
      cur += p.val
      p = p.father
    }

    //如果相加等于目标值， 记录这条路径所有值
    if(cur == targetSum){
      p = arr[i]
      while(p !== null){
        c_arr.push(p.val)
        p = p.father
      }
      res.push(c_arr)
    }
  }
  //将res中每个数组反转
  for(let i = 0; i < res.length; i++){
    res[i].reverse()
  }
  return res
};

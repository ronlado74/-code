var isSymmetric = function(root) {
  if(!root) return true
  const recution = function(left, right){
    if(left == null && right == null){
      return true
    }
    if(left && right){
      return left.val === right.val && recution(left.left, right.right) && recution(left.right, right.left)
    }
    return false  //一个子树存在，一个不存在
  }
  return recution(root.left, root.right)
};

//使用中序遍历，判断是否是回文数组
var isSymmetric = function(root) {
  let arr = [] 
  const recution = function(node, pos){
    if(node){
      node.pos = pos
      if(node.left) recution(node.left, 'l')
        arr.push({val:node.val, pos:node.pos})
      if(node.right) recution(node.right, 'r')
    }
  }
  recution(root, null)
  if(arr.length == 0){
    return true
  }
  if(arr.length % 2 == 0){
    return false
  }else{ //判断回文
    let left = 0
    let right = arr.length - 1
    while(left < right){
      if(arr[left].val != arr[right].val || arr[left].pos === arr[right].pos){
        return false
      }else{
        return true
      }
    }
  }
};
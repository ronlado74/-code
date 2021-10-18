//中序遍历后，数组必须为升序
var isValidBST = function(root) {
  let arr = []
  let res = true
  const recution = function(node){
    if(node){
      if(node.left) recution(node.left)
      arr.push(node.val)
      if(node.right) recution(node.right)
    }
  }
  recution(root)

  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] >= arr[i + 1]){
      res = false
    }
  }
  return res
};
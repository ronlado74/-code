var postorderTraversal = function(root) {
  let arr = []
  if(root === null){
    return arr
  }

  const recursion = function(node){
    if(node.left) recursion(node.left)
    if(node.right) recursion(node.right)
    arr.push(node.val) 
  }
  recursion(root)
  return arr
};